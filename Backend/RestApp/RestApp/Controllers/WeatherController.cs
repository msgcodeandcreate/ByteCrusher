using RestApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RestApp.Controllers
{
  public class WeatherController : ApiController
  {
    // GET: api/Weather
    public IEnumerable<WeatherInfo> Get()
    {
      var weatherInfList = new List<WeatherInfo>();
      for (int i = 0; i < 10; i++)
      {
        WeatherInfo info = new WeatherInfo
        {
          Location = $"Location {i}",
          Degree = i * 2,
          DateTime = DateTime.Now.ToUniversalTime()
        };

        weatherInfList.Add(info);
      }
      return weatherInfList;
    }

    // GET: api/Weather/5
    public WeatherInfo Get(int id)
    {
      return new WeatherInfo
      {
        Location = $"Location {id}",
        Degree = id * 2,
        DateTime = DateTime.Now.ToUniversalTime()
      }; ;
    }

  }
}
