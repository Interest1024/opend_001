import React, {Component} from 'react';
//import { connect } from 'react-redux'

class Home extends Component {
  
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>response.json())
      .then(res => {
        //console.log(res);
        this.setState({
          posts: res.slice(0,10)
        })

      })
  } 
  
  render() {
    return (
      <div class="container z-depth-2">
        <div class="row">
          <div class="col s12">

            <div class="row">
              <div class="col s12">
                <br />
                <h4 class="center">Address Labs</h4>
                <h6 class="center">Community Contributed Open Datasets for Australian Addresses</h6>
                <br />
              </div>
            </div>

            <div class="row">
              <div class="col s12 input-field">
                <i class="material-icons prefix">textsms</i>
                <input type="text" id="rapidAddress" size="100" placeholder="Type in address here" class="autocomplete" />
                <p class="right">Address Type Ahead lookup API above is powered by  
                  <a href="https://harmonyrightaddress.com" target="_blank" rel="noopener noreferrer">Harmony RightAddress</a> 
                </p>
              </div>
            </div>

          <div class="row">
            <div class="col s12">
              <div id="error"></div>
              <br />
            </div>
          </div>

          <div class="row">
            <div class="col s0 m1 l1"></div>
            <div class="col s12 m8 l6">
              <label>GNAF PID</label>
              <input id="HRA_ID" type="text" class="validate" readonly="readonly" name="HRA_ID" placeholder="ID (DPID or GNAF PID)" size="60" />
              <label>Subdwelling</label>
              <input type="text" class="validate" readonly="readonly" size="60" id="flatNumber"/>
              <label>Street number</label>
              <input type="text" class="validate" readonly="readonly" size="60" id="streetNumber"/>
              <label>Street name</label>
              <input type="text" class="validate" readonly="readonly" size="60" id="streetName"/>
              <label>Street type</label>
              <input type="text" class="validate" readonly="readonly" size="60" id="streetType"/>
              <label>Suburb</label>
              <input type="text" class="validate" readonly="readonly" size="60" id="suburb"/>
              <label>State</label>
              <input type="text" class="validate" readonly="readonly" size="60" id="state"/>
              <label>Postcode</label>
              <input type="text" class="validate" readonly="readonly" size="60" id="postcode"/>
              <label>Longitude</label>
              <input type="text" class="validate" readonly="readonly" size="60" id="longitude"/>
              <label>Latitude</label>
              <input type="text" class="validate" readonly="readonly" size="60" id="latitude"/>

              <form name="getReportForm" method="POST" action="\report">
                  <input type="hidden" name="fullAddress" />
                  <input type="hidden" name="postcode" />
                  <input type="hidden" name="longitude" />
                  <input type="hidden" name="latitude" />
                  <button type="submit" class="btn waves-effect waves-light" value="Get report" name="btn_submit">Report
                    <i class="material-icons right">send</i>
                  </button>
              </form>
            </div>
          </div>

        </div>
      </div>
      </div>
      );
  }

}

/*
const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
} 

export default connect(mapStateToProps)(Home);
*/

export default Home;