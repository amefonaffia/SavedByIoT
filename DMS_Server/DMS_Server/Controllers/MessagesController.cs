using DMS_Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DMS_Server.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Threading.Tasks;
using System.Web.Http.Results;

namespace DMS_Server.Controllers
{
    
    public class MessagesController : ApiController
    {
        DatabaseEntities _db;

        public MessagesController()
        {
            _db = new DatabaseEntities();
        }

        // GET: api/Messages
        //[System.Web.Mvc.HttpGet]
        [HttpGet]
        public IHttpActionResult Get()
        {

            IEnumerable<Message> result = _db.Messages.ToList();
            
            //string json =  JsonConvert.SerializeObject(result, Formatting.Indented);

            return Ok(result);
        }

        // GET: api/Messages/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Messages
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Messages/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Messages/5
        public void Delete(int id)
        {
        }
    }
}
