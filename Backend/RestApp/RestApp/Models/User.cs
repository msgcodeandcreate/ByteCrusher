using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RestApp.Models
{
  public class User
  {
    public int UserId { get; set; }
    public string Password { get; set; }

    public string FirstName { get; set; }

    public string LastName { get; set; }

    public string E_Mail { get; set; }

    public string Bio { get; set; }

    public string BirthDay { get; set; }

  }
}