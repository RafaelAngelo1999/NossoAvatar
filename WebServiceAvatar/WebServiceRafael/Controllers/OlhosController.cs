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
    public class OlhosController : ControllerBase
    {
        private readonly DataContext _context;

        public OlhosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Olhos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Olhos>>> GetOlhos()
        {
            return await _context.Olhos.ToListAsync();
        }

        // GET: api/Olhos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Olhos>> GetOlhos(int id)
        {
            var olhos = await _context.Olhos.FindAsync(id);

            if (olhos == null)
            {
                return NotFound();
            }

            return olhos;
        }

        // PUT: api/Olhos/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOlhos(int id, Olhos olhos)
        {
            if (id != olhos.Id)
            {
                return BadRequest();
            }

            _context.Entry(olhos).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OlhosExists(id))
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

        // POST: api/Olhos
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Olhos>> PostOlhos(Olhos olhos)
        {
            _context.Olhos.Add(olhos);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetOlhos", new { id = olhos.Id }, olhos);
        }

        // DELETE: api/Olhos/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Olhos>> DeleteOlhos(int id)
        {
            var olhos = await _context.Olhos.FindAsync(id);
            if (olhos == null)
            {
                return NotFound();
            }

            _context.Olhos.Remove(olhos);
            await _context.SaveChangesAsync();

            return olhos;
        }

        private bool OlhosExists(int id)
        {
            return _context.Olhos.Any(e => e.Id == id);
        }
    }
}
