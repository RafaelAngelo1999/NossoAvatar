using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebServiceRafael.Data;
using WebServiceRafael.Models;

namespace WebServiceRafael.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransparenciasController : ControllerBase
    {
        private readonly DataContext _context;

        public TransparenciasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Transparencias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Transparencia>>> GetTransparencia()
        {
            return await _context.Transparencia.ToListAsync();
        }

        // GET: api/Transparencias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Transparencia>> GetTransparencia(int id)
        {
            var transparencia = await _context.Transparencia.FindAsync(id);

            if (transparencia == null)
            {
                return NotFound();
            }

            return transparencia;
        }

        // PUT: api/Transparencias/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTransparencia(int id, Transparencia transparencia)
        {
            if (id != transparencia.Id)
            {
                return BadRequest();
            }

            _context.Entry(transparencia).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TransparenciaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Transparencias
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Transparencia>> PostTransparencia(Transparencia transparencia)
        {
            _context.Transparencia.Add(transparencia);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTransparencia", new { id = transparencia.Id }, transparencia);
        }

        // DELETE: api/Transparencias/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Transparencia>> DeleteTransparencia(int id)
        {
            var transparencia = await _context.Transparencia.FindAsync(id);
            if (transparencia == null)
            {
                return NotFound();
            }

            _context.Transparencia.Remove(transparencia);
            await _context.SaveChangesAsync();

            return transparencia;
        }

        private bool TransparenciaExists(int id)
        {
            return _context.Transparencia.Any(e => e.Id == id);
        }
    }
}
