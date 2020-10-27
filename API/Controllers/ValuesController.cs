﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Get()
        {
            var values=await _context.Valyes.ToListAsync();
            return Ok(values);
        }

        [HttpGet("{id}")]
        public async Task< ActionResult<Value>> Get(int id)
        {
            var value=await _context.Valyes.FindAsync(id);
            return Ok(value);
        }
    }
}
