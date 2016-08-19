namespace WebApi.Models
{
    public class DetalleLibroDto
    {
        public int IdLibro { get; set; }
        public string Titulo { get; set; }
        public int Año { get; set; }
        public double Precio { get; set; }
        public string NombreAutor { get; set; }
        public string Genero { get; set; }
    }
}