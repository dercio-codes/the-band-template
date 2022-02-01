import { color } from "@mui/system";

const TourDates = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // padding:'8px'
      }}
    >
      <div style={{ background: "black", height: "95%", width: "60%" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ color: "white" }}>TOUR DATES</h2>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            <i style={{ color: "gray", fontSize: "15px" }}>
              Remember to buy your tickets !
            </i>
          </p>
        </div>

        <div
          style={{
            width: "100%",
            height: "119px",
            border: "1px gray solid",
            background: "white",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "39.5px",
              //  border:"1px red solid",
              padding: "8px 16px",
              color: "gray",
              display: "flex",
              border: "1px gray solid",
            }}
          >
            September
            <div
              style={{
                background: "#F44336",
                padding: "0px 8px",
                margin: "0px 0px 0px 16px",
                color: "white",
              }}
            >
              Sold out
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "39.5px",
              //  border:"1px red solid",
              padding: "8px 16px",
              color: "gray",
              display: "flex",
              border: "1px gray solid",
            }}
          >
            October
            <div
              style={{
                background: "#F44336",
                padding: "0px 8px",
                margin: "0px 0px 0px 16px",
                color: "white",
              }}
            >
              Sold out
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "39.5px",
              //  border:"1px red solid",
              padding: "8px 16px",
              color: "gray",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            November
            <div
              style={{
                background: "#000",
                padding: "0px 8px",
                margin: "0px 0px 0px 16px",
                color: "white",
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p>3</p>
            </div>
          </div>
        </div>

        <div
          style={{
            //  border:"1px red solid",
            width: "100%",
            display: "flex",
          }}
        >
          <div
            style={{
              border: "1px black solid",
              paddingTop: "15px",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                // border:"1px blue solid",
                width: "255px",
              }}
            >
              <div
                style={{
                  width: "255px",
                  height: "183px",
                  // border:"1px red solid"
                }}
              >
                <img
                  src="https://www.w3schools.com/w3images/newyork.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  width: "255px",
                  height: "183px",
                  background: "white",
                  padding: "6px 6px 6px 6px",
                }}
              >
                <p style={{ margin: "1px 0px 10px 0px" }}>
                  <b>New York</b>
                </p>
                <p>Fri 27 Nov 2016</p>
                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button
                  style={{
                    background: "black",
                    padding: "8px",
                    color: "white",
                    border:'none'
                  }}
                >
                  Buy Tickets
                </button>
              </div>
            </div>

            <div
              style={{
                // border:"1px blue solid",
                width: "255px",
              }}
            >
              <div
                style={{
                  width: "255px",
                  height: "183px",
                  // border:"1px red solid"
                }}
              >
                <img
                  src="https://www.w3schools.com/w3images/paris.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  width: "255px",
                  height: "183px",
                  background: "white",
                  padding: "6px 6px 6px 6px",
                }}
              >
                <p style={{ margin: "1px 0px 10px 0px" }}>
                  <b>New York</b>
                </p>
                <p>Fri 27 Nov 2016</p>
                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button
                  style={{
                    background: "black",
                    padding: "8px",
                    color: "white",
                    border:'none'

                  }}
                >
                  Buy Tickets
                </button>
              </div>
            </div>

            <div
              style={{
                // border:"1px blue solid",
                width: "255px",
              }}
            >
              <div
                style={{
                  width: "255px",
                  height: "183px",
                  // border:"1px red solid"
                }}
              >
                <img
                  src="https://www.w3schools.com/w3images/sanfran.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  width: "255px",
                  height: "183px",
                  background: "white",
                  padding: "6px 6px 6px 6px",
                }}
              >
                <p style={{ margin: "1px 0px 10px 0px" }}>
                  <b>New York</b>
                </p>
                <p>Fri 27 Nov 2016</p>
                <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
                <button
                  style={{
                    background: "black",
                    padding: "8px",
                    color: "white",
                    border:'none'

                  }}
                >
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDates;
