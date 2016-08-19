using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Libro
    {
        [Key]
        public int IdLibro { get; set; }

        public string Titulo { get; set; }
        public int Año { get; set; }
        public double Precio { get; set; }
        public string Genero { get; set; }

        // Clave foranea
        public int IdAutor { get; set; }

        // Propiedad de navegación
        [ForeignKey("IdAutor")]
        public /*virtual*/ Autor Autor { get; set; }
    }
}