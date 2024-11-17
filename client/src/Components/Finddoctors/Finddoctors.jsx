import { Link } from "react-router-dom";
import React from "react";
import style from "./Find.module.css";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
export default function Finddoctors() {
  return (
    <>
      <div className={style.main}>
        <h1 className={style.name1}>Your home for health</h1>
        <div>
          <h4 className={style.name1}>Find and book</h4>
          <div className={style.searchbox}>
            <input
              className="w-25"
              id="searchbox"
              type="text"
              placeholder="Enter Location"
            />
            <input
              className="w-50 h-25"
              id="searchbox"
              type="text"
              placeholder="Search doctor, clinic, hospitals, etc..."
            />
          </div>
          <div className={style.searchLink}>
            <span className="mx-4">Speciality:</span>
            <span className="mx-4">Dermatologist</span>
            <span className="mx-4">Pediatrician</span>
            <span className="mx-4">Dentist</span>
            <span className="mx-4">General physician</span>
            <span className="mx-4">ENT</span>
            <span className="mx-4">Gynecologist</span>
          </div>
        </div>

        <div className={style.down}></div>
      </div>
      <div>
        <div className={style.another}>
          <div className={style.left}>
            <h2 class={style.safe}>
              Safety of your data is our <strong>Top Priority</strong>
            </h2>
            <div class="c-list-item">
              <ul>
                <div>
                  <i className="c-list-item__icon icon-ic_done_open_system"></i>
                  <a>Multi-level security checks</a>
                </div>
                <div>
                  <i className="c-list-item__icon icon-ic_done_open_system"></i>
                  <a>Multiple data backups</a>
                </div>
                <div>
                  <i className="c-list-item__icon icon-ic_done_open_system"></i>
                  <a>Stringent data privacy policies</a>
                </div>
              </ul>
              <button className="btn btn-primary w-25">Read More </button>
            </div>
          </div>
          <div className={style.right}>
            <img
              src="https://www.practostatic.com/web-assets/home/assets/images/security_1.4f45ac92aba979dac915f864df632d90.png"
              alt=""
              width="250px;"
            />
          </div>
        </div>
        <div style={{ backgroundColor: "#f0f0f5" }}>
          <div className={style.certi}>
            <div class="c-certificate">
              <div className={style.image}>
                <img
                  src="https://www.practostatic.com/web-assets/home/assets/images/security_2.654a7085bfa74c726f26b64edaafd9a5.png"
                  alt="img"
                />
              </div>
              <p class="u-t-large">256-bit</p>
              <p class="u-t-small">encryption</p>
            </div>
            <div class="c-certificate">
              <div className={style.image}>
                <img
                  src="https://www.practostatic.com/web-assets/home/assets/images/security_3.a73921ca6e980ed186518d7cb0ce64bf.png"
                  alt="img"
                />
              </div>
              <div class="c-certificate__info">
                <p class="u-t-large">ISO 27001</p>
                <p class="u-t-small">certified</p>
              </div>
            </div>
            <div class="c-certificate">
              <div className={style.image}>
                <img
                  src="https://www.practostatic.com/web-assets/home/assets/images/security_4.216e25d35038f0e7f6d8a514727fa67a.png"
                  alt="img"
                />
              </div>
              <div class="c-certificate__info">
                <p class="u-t-large">HIPAA</p>
                <p class="u-t-small">compliant data centers</p>
              </div>
            </div>
            <div class="c-certificate">
              <div className={style.image}>
                <img
                  src="https://www.practostatic.com/web-assets/home/assets/images/security_5.cf6e04c57178071a67c219b43066ffcf.png"
                  alt="img"
                />
              </div>
              <div class="c-certificate__info">
                <p class="u-t-large">DSCI</p>
                <p class="u-t-small">member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class={style.consult}>
        <div class={style.left2}>
          <video
            class="rh5v-DefaultPlayer_video"
            poster="https://www.practostatic.com/web-assets/home/assets/images/consult.15f1b416f3f4c9383b780757d7293d00.png"
            width="250"
            height="480"
            loading="false"
            autoplay="true"
            loop="2"
          >
            <source
              src="//www.practostatic.com/web-assets/home/assets/videos/consult.099446892618434cc8a038d7844c4380.webm"
              type="video/webm"
            />
          </video>
        </div>
        <div className={style.right2}>
          <h2 style={{ fontFamily: "Poppins, sans-serif" }}>
            Skip the waiting room <br></br>
            <strong>Consult with a doctor</strong>
          </h2>
          <ul>
            <div>
              <i className="c-list-item__icon icon-ic_done_open_system"></i>
              <a className="fs-5">
                Fees starting at <strong>₹99</strong>
              </a>
            </div>
            <div>
              <i className="c-list-item__icon icon-ic_done_open_system"></i>
              <a className="fs-5">
                Verified doctors respond in <strong>5 minutes</strong>
              </a>
            </div>
            <div>
              <i className="c-list-item__icon icon-ic_done_open_system"></i>
              <a className="fs-5">100% Private and confidential</a>
            </div>
          </ul>
          <Link to={"/findDoctors"}>
            <button className="btn btn-primary w-50 mx-5">Consult Now</button>{" "}
          </Link>
          <i class="icon-ic_star_solid icon-star"></i>
          <i class="icon-ic_star_solid icon-star"></i>
          <i class="icon-ic_star_solid icon-star"></i>
          <i class="icon-ic_star_solid icon-star"></i>
        </div>
        <div></div>
      </div>
      <Snackbar open={true} autoHideDuration={1000}>
        <Alert severity="info">
          Hey! I have got your location, I'm using a free API so sometimes the
          location might not populate in the left part of the search bar.
        </Alert>
      </Snackbar>
    </>
  );
}
