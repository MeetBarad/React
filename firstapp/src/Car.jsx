function Car({color,brand,...rest}) {
  return (
    <h2>Car model:{rest.model}</h2>
  ); 
}
export default Car;