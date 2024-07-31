namespace MiWebApi.Models
{
    public class Empleado
    {
        public int Idempleado { get; set; }
        public string? NombreCompleto { get; set; }
        public string? Correo { get; set; }
        public decimal Sueldo { get; set; }
        public string? FechaContrato { get; set; }
    }
}
