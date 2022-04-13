import Head from "next/head"
export default function Logs() {
  return (
    <>
    <Head>
        <title>Activity</title>
    </Head>
      <div className="p-3 container mx-auto h-screen">
        <p class="mt-2 text-3xl font-bold sm:text-5xl text-center text-[#FA58B6] pb-4">
          Activity
        </p>
        <div className="p-16 grid md:grid-cols-3 gap-[4.5rem] ">
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-xl p-5 shadow-lg shadow-[#7A0BC0]/40"
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              backdropFilter: "blur(5px)",
              borderRadius: "20px",
            }}
          >
            <p className="text-lg pb-2 text-white font-bold">Event Name</p>
            <p className="text-md text-white">Event Address</p>
            <h5 className="text-lg text-[#FA58B6] font-semibold">Check In Time</h5>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-xl p-5 shadow-lg shadow-[#7A0BC0]/40"
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              backdropFilter: "blur(5px)",
              borderRadius: "20px",
            }}
          >
            <p className="text-lg pb-2 text-white font-bold">Event Name</p>
            <p className="text-md text-white">Event Address</p>
            <h5 className="text-lg text-[#FA58B6] font-semibold">Check In Time</h5>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-xl p-5 shadow-lg shadow-[#7A0BC0]/40"
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              backdropFilter: "blur(5px)",
              borderRadius: "20px",
            }}
          >
            <p className="text-lg pb-2 text-white font-bold">Event Name</p>
            <p className="text-md text-white">Event Address</p>
            <h5 className="text-lg text-[#FA58B6] font-semibold">Check In Time</h5>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-xl p-5 shadow-lg shadow-[#7A0BC0]/40"
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              backdropFilter: "blur(5px)",
              borderRadius: "20px",
            }}
          >
            <p className="text-lg pb-2 text-white font-bold">Event Name</p>
            <p className="text-md text-white">Event Address</p>
            <h5 className="text-lg text-[#FA58B6] font-semibold">Check In Time</h5>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-xl p-5 shadow-lg shadow-[#7A0BC0]/60"
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              backdropFilter: "blur(5px)",
              borderRadius: "20px",
            }}
          >
            <p className="text-lg pb-2 text-white font-bold">Event Name</p>
            <p className="text-md text-white">Event Address</p>
            <h5 className="text-lg text-[#FA58B6] font-semibold">Check In Time</h5>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-4 rounded-xl p-5 shadow-lg shadow-[#7A0BC0]/40"
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              backdropFilter: "blur(5px)",
              borderRadius: "20px",
            }}
          >
            <p className="text-lg pb-2 text-white font-bold">Event Name</p>
            <p className="text-md text-white">Event Address</p>
            <h5 className="text-lg text-[#FA58B6] font-semibold">Check In Time</h5>
          </div>
        </div>
      </div>
    </>
  );
}
