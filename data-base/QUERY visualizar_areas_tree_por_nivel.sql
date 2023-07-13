SELECT AT.area_id1,Ar.level
FROM Areas_tree AS AT, Areas AS Ar
WHERE AT.area_id1 = Ar.area_id;

SELECT AT.area_id2,Ar.level
FROM Areas_tree AS AT, Areas AS Ar
WHERE AT.area_id2 = Ar.area_id;

SELECT Area1.area_id1, Area1.level, Area2.area_id2, Area2.level
FROM (SELECT AT.area_id1,Ar.level
	  FROM Areas_tree AS AT, Areas AS Ar
	  WHERE AT.area_id1 = Ar.area_id) AS Area1,
	 (SELECT AT.area_id2,Ar.level
	  FROM Areas_tree AS AT, Areas AS Ar
	  WHERE AT.area_id2 = Ar.area_id) AS Area2,
	  Areas_tree AS AT
WHERE AT.area_id1 = Area1.area_id1
AND AT.area_id2 = Area2.area_id2
ORDER BY Area1.level, Area2.level;