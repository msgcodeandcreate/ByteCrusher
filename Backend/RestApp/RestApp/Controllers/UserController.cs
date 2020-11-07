using Microsoft.Ajax.Utilities;
using System;
using System.Diagnostics;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Newtonsoft.Json;

namespace RestApp.Models
{
  public class UserController : ApiController
  {
    // GET: api/User
    //public IEnumerable<string> Get()
    //{
    //    return new string[] { "value1", "value2" };
    //}

    // GET: api/User/5
    //public string Get(int id)
    //{
    //    return "value";
    //}

    // post: api/user
    public HttpResponseMessage Post([FromBody] User user)
    {
      try
      {
        string eMail = user.E_Mail;
        string password = user.Password;
        string firstName = user.FirstName;
        string lastName = user.LastName;
        

        if (eMail == null || password == null || firstName == null || lastName == null)
        {
          throw new ArgumentException($"Property E-Mail, Password, FirstName and LastName must not be null");
        }
        else if (
          (eMail = eMail.Trim()) == String.Empty || 
          (password = password.Trim()) == String.Empty || 
          (firstName = firstName.Trim()) == String.Empty || 
          (lastName = lastName.Trim()) == String.Empty)
        {
          throw new ArgumentException($"Property E-Mail, Password, FirstName and LastName must not be empty");
        }
        else
        {
          // Insert into database
          
          int userId = 1234;
          
          var dict = new Dictionary<string, object>();
          dict.Add("serId", userId);

          var message = Request.CreateResponse(HttpStatusCode.Created, JsonConvert.SerializeObject(dict));
          return message;
        }
      }
      catch (Exception ex)
      {
        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
      }
      


    }



  // PUT: api/User/5
  //public void Put(int id, [FromBody]string value)
  //{
  //}

  //// DELETE: api/User/5
  //public void Delete(int id)
  //{
  //}
}
}
