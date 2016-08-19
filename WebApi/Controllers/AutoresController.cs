using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class AutoresController : ApiController
    {
        private readonly WebApiContext _db = new WebApiContext();

        // GET: api/Autores
        public IQueryable<Autor> GetAutors() => _db.Autores;

        // GET: api/Autores/5
        [ResponseType(typeof(Autor))]
        public async Task<IHttpActionResult> GetAutor(int id)
        {
            var autor = await _db.Autores.FindAsync(id);
            if (autor == null)
            {
                return NotFound();
            }

            return Ok(autor);
        }

        // PUT: api/Autores/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutAutor(int id, Autor autor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != autor.IdAutor)
            {
                return BadRequest();
            }

            _db.Entry(autor).State = EntityState.Modified;

            try
            {
                await _db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AutorExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Autores
        [ResponseType(typeof(Autor))]
        public async Task<IHttpActionResult> PostAutor(Autor autor)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.Autores.Add(autor);
            await _db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = autor.IdAutor }, autor);
        }

        // DELETE: api/Autores/5
        [ResponseType(typeof(Autor))]
        public async Task<IHttpActionResult> DeleteAutor(int id)
        {
            var autor = await _db.Autores.FindAsync(id);
            if (autor == null)
            {
                return NotFound();
            }

            _db.Autores.Remove(autor);
            await _db.SaveChangesAsync();

            return Ok(autor);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AutorExists(int id) => _db.Autores.Count(e => e.IdAutor == id) > 0;
    }
}