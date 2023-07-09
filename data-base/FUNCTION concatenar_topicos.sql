CREATE OR REPLACE FUNCTION concatenar_topicos(topic_anterior TEXT,topic_posterior TEXT)
RETURNS TEXT AS 
$$
DECLARE
	resultado text;
BEGIN
	resultado := topic_anterior || '/' || topic_posterior;
	RETURN resultado;
END;
$$
LANGUAGE plpgsql;

SELECT concatenar_topicos('UCAB','Biblioteca');
