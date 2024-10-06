import asset1 from "../../assets/subscribe_section/asset_1.png";
import asset2 from "../../assets/subscribe_section/asset_2.png";
import { Formik } from "formik";
import axios from "axios";
import { useRef, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

const SubscribeSection = ({ ref1 }) => {
  // Refs
  const inputRef = useRef(null);

  // Load the map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA08bx_f-liumQJy6UcpwEvcanF0DInboA",
    libraries: ["places"],
  });

  const [coords, setCoords] = useState({
    lat: 0,
    lng: 0,
  });

  // Process the location
  const geocode = (request) => {
    if (!window.google) {
      alert("Google Maps API is not loaded yet!");
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    geocoder
      .geocode(request)
      .then((result) => {
        const { results } = result;
        if (results && results[0]) {
          const location = results[0].geometry.location.toJSON();
          setCoords({
            lat: location.lat,
            lng: location.lng,
          });
        }
      })
      .catch((e) => {
        alert("Geocode failed due to: " + e);
      });
  };

  const handleGeocode = () => {
    const address = inputRef.current?.value;
    if (address) {
      geocode({ address });
    }
  };

  return (
    <div
      className="relative w-full h-[600px] flex justify-between items-center"
      ref={ref1}
    >
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-between items-center h-[80%] w-[40%]">
          <Formik
            onSubmit={async (values, { resetForm }) => {
              try {
                handleGeocode();
                const dummy = {
                  lat: coords.lat,
                  lng: coords.lng,
                };
                const response = await axios.post(
                  "http://localhost:3000/createUser",
                  {
                    email: values.email.toLowerCase().trim(),
                    fullname: values.fullname.toLowerCase().trim(),
                    phone: values.phone.toLowerCase().trim(),
                    lat: dummy.lat,
                    lng: dummy.lng,
                  }
                );
                alert("User created successfully");
                resetForm();
              } catch (err) {
                console.log(err);
              }
            }}
            initialValues={{ fullname: "", email: "", phone: "", address: "" }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form
                className="flex flex-col gap-5 w-full"
                onSubmit={handleSubmit}
              >
                <span className="text-4xl font-gopherRegular w-full text-center">
                  Subscribe
                </span>

                <input
                  className="bg-main-beige bg-opacity-45 w-full backdrop-blur-md border-[1px] border-black rounded-[10px] py-3 px-5 focus:outline-black"
                  placeholder="Name"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                ></input>
                <input
                  className="bg-main-beige bg-opacity-45 w-full backdrop-blur-md border-[1px] border-black rounded-[10px] py-3 px-5 focus:outline-black"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                ></input>
                <input
                  className="bg-main-beige bg-opacity-45 w-full backdrop-blur-md border-[1px] border-black rounded-[10px] py-3 px-5 focus:outline-black"
                  placeholder="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                ></input>
                <input
                  className="bg-main-beige bg-opacity-45 w-full backdrop-blur-md border-[1px] border-black rounded-[10px] py-3 px-5 focus:outline-black"
                  placeholder="Address"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  ref={inputRef}
                ></input>

                <button
                  type="submit"
                  className="bg-[#ABA69C] bg-opacity-45 backdrop-blur-md px-10 py-3 rounded-[10px] border-[1px] border-black hover:bg-opacity-95 tr"
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>

      <div className="w-[50%] h-full flex justify-start items-end">
        <img src={asset1} className="h-[450px]" />
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <img src={asset2} className="h-[450px]" />
      </div>
    </div>
  );
};

export default SubscribeSection;
