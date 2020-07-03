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
    public class SombrancelhasController : ControllerBase
    {
        private readonly DataContext _context;

        public SombrancelhasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Sombrancelhas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Sombrancelha>>> GetSombrancelha()
        {
            return await _context.Sombrancelha.ToListAsync();
        }

        // GET: api/Sombrancelhas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Sombrancelha>> GetSombrancelha(int id)
        {
            var sombrancelha = await _context.Sombrancelha.FindAsync(id);

            if (sombrancelha == null)
            {
                return NotFound();
            }

            return sombrancelha;
        }

        // PUT: api/Sombrancelhas/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSombrancelha(int id, Sombrancelha sombrancelha)
        {
            if (id != sombrancelha.Id)
            {
                return BadRequest();
            }

            _context.Entry(sombrancelha).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SombrancelhaExists(id))
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

        // POST: api/Sombrancelhas
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Sombrancelha>> PostSombrancelha(Sombrancelha sombrancelha)
        {
            _context.Sombrancelha.Add(sombrancelha);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSombrancelha", new { id = sombrancelha.Id }, sombrancelha);
        }

        // DELETE: api/Sombrancelhas/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Sombrancelha>> DeleteSombrancelha(int id)
        {
            var sombrancelha = await _context.Sombrancelha.FindAsync(id);
            if (sombrancelha == null)
            {
                return NotFound();
            }

            _context.Sombrancelha.Remove(sombrancelha);
            await _context.SaveChangesAsync();

            return sombrancelha;
        }

        private bool SombrancelhaExists(int id)
        {
            return _context.Sombrancelha.Any(e => e.Id == id);
        }
    }
}
