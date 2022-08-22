SELECT o.observerid, b.fullname, COUNT(observerid) AS obs,
        
        (SELECT SUM (CASE WHEN observerid=o.observerid AND stage ='production' then 1 WHEN NULL then 0 else 0 end)
        FROM gtx.observation 
        WHERE fileid IN (SELECT fileid FROM gtx.observation WHERE observerid=o.observerid AND NOT DAY(dt_seen_local) = 20) AND fileid IN (SELECT id FROM gtx.video WHERE count_complete_watched>1)
        ) as observations_count_no20th,
        
        (SELECT SUM (CASE WHEN observerid=o.observerid AND is_orphan AND stage ='production' then 1 WHEN NULL then 0 else 0 end)
        FROM gtx.observation 
        WHERE fileid IN (SELECT fileid FROM gtx.observation WHERE observerid=o.observerid AND NOT DAY(dt_seen_local) = 20 )  AND fileid IN (SELECT id FROM gtx.video WHERE count_complete_watched>1)
        ) as orphans_count_no20th,
        (SELECT SUM (CASE WHEN observerid=o.observerid AND is_orphan AND stage ='production' then 1 WHEN NULL then 0 else 0 end)
        FROM gtx.observation 
        WHERE fileid IN (SELECT fileid FROM gtx.observation WHERE observerid=o.observerid AND NOT DAY(dt_seen_local) = 20 )  HAVING COUNT(distinct observerid)>1
        ) as orphans_count_no20th,
        
        (SELECT SUM (CASE WHEN NOT observerid=o.observerid AND is_orphan AND stage ='production' THEN 1 WHEN NULL THEN 0 else 0 end)
        FROM gtx.observation 
        WHERE fileid IN (SELECT fileid FROM gtx.observation WHERE observerid=o.observerid AND NOT DAY(dt_seen_local) = 20) HAVING COUNT(distinct observerid)>1 
        ) as undetected_orphans_count_no20th,
        
        (SELECT SUM (CASE WHEN observerid=o.observerid AND stage ='production' then 1 WHEN NULL then 0 else 0 end)
        FROM gtx.observation 
        WHERE fileid IN (SELECT fileid FROM gtx.observation WHERE observerid=o.observerid AND DAY(dt_seen_local) = 20)  HAVING COUNT(distinct observerid)>1
        ) as observations_count_20th,
        
        (SELECT SUM (CASE WHEN observerid=o.observerid AND is_orphan AND stage ='production' then 1 WHEN NULL then 0 else 0 end)
        FROM gtx.observation 
        WHERE fileid IN (SELECT fileid FROM gtx.observation WHERE observerid=o.observerid AND DAY(dt_seen_local) = 20) HAVING COUNT(distinct observerid)>1
        ) as orphans_count_20th,
        
        (SELECT COUNT(*)  
        FROM gtx.observation 
        WHERE fileid IN (SELECT fileid FROM gtx.observation WHERE observerid=o.observerid AND DAY(dt_seen_local) = 20) AND is_orphan AND NOT observerid = o.observerid AND stage='production'
        ) AS undetected_orphans_count_20th
        
FROM   gtx.observation obs  
JOIN   observer o ON o.id = obs.observerid 
JOIN   video v    ON v.id = obs.fileid
JOIN   video va   ON va.id= obs.fileid
WHERE  obs.stage='production'     
AND    o.stage='production'
AND    v.stage='production'
AND    va.stage='production'
AND    v.count_complete_watched>1
GROUP BY o.observerid


-- COUNT OF crowd agreed, % orphans against, count of how many times people are not part of the corwd agreement, look at why some have an orphan count, undetected corwd observations/ files watched