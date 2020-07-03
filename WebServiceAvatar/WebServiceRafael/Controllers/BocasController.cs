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
    public class BocasController : ControllerBase
    {
        private readonly DataContext _context;

        public BocasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Bocas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Boca>>> GetBoca()
        {
            return await _context.Boca.ToListAsync();
        }

        // GET: api/Bocas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Boca>> GetBoca(int id)
        {
            var boca = await _context.Boca.FindAsync(id);

            if (boca == null)
            {
                return NotFound();
            }

            return boca;
        }

        // PUT: api/Bocas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBoca(int id, Boca boca)
        {
            if (id != boca.Id)
            {
                return BadRequest();
            }

            _context.Entry(boca).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BocaExists(id))
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

        // POST: api/Bocas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Boca>> PostBoca(Boca boca)
        {
            _context.Boca.Add(boca);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBoca", new { id = boca.Id }, boca);
        }

        // DELETE: api/Bocas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Boca>> DeleteBoca(int id)
        {
            var boca = await _context.Boca.FindAsync(id);
            if (boca == null)
            {
                return NotFound();
            }

            _context.Boca.Remove(boca);
            await _context.SaveChangesAsync();

            return boca;
        }

        private bool BocaExists(int id)
        {
            return _context.Boca.Any(e => e.Id == id);
        }
    }
}
