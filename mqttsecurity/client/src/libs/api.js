export const token = localStorage.getItem("token");
//obtener todos los topicos para suscribirse
export const headers = {
  'Authorization': `Bearer ${token}`,
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Custom-Header': 'Custom-Value'
};