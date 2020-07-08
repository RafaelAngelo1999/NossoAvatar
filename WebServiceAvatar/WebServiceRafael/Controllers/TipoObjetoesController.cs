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
    public class TipoObjetoesController : ControllerBase
    {
        private readonly DataContext _context;

        public TipoObjetoesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/TipoObjetoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TipoObjeto>>> GetTipoObjeto()
        {
            return await _context.TipoObjeto.ToListAsync();
        }

        // GET: api/TipoObjetoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TipoObjeto>> GetTipoObjeto(int id)
        {
            var tipoObjeto = await _context.TipoObjeto.FindAsync(id);

            if (tipoObjeto == null)
            {
                return NotFound();
            }

            return tipoObjeto;
        }

        // PUT: api/TipoObjetoes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTipoObjeto(int id, TipoObjeto tipoObjeto)
        {
            if (id != tipoObjeto.Id)
            {
                return BadRequest();
            }

            _context.Entry(tipoObjeto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TipoObjetoExists(id))
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

        // POST: api/TipoObjetoes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<TipoObjeto>> PostTipoObjeto(TipoObjeto tipoObjeto)
        {
            _context.TipoObjeto.Add(tipoObjeto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTipoObjeto", new { id = tipoObjeto.Id }, tipoObjeto);
        }

        // DELETE: api/TipoObjetoes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TipoObjeto>> DeleteTipoObjeto(int id)
        {
            var tipoObjeto = await _context.TipoObjeto.FindAsync(id);
            if (tipoObjeto == null)
            {
                return NotFound();
            }

            _context.TipoObjeto.Remove(tipoObjeto);
            await _context.SaveChangesAsync();

            return tipoObjeto;
        }

        private bool TipoObjetoExists(int id)
        {
            return _context.TipoObjeto.Any(e => e.Id == id);
        }
    }
}
