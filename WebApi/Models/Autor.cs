using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Autor
    {
        [Key]
        public int IdAutor { get; set; }

        [Required]
        public string Nombre { get; set; }

        //[InverseProperty("Autor")]
        //public ICollection<Libro> Libros { get; set; }

    }
}