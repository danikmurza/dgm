import React from "react"
import {scrollToTop} from "./Footer";


const DidStart = () => {
    return (
        <div className="about-us pl-5 pr-4">
            <h3 className="roadside"><strong>Car not starting? Get your car diagnosed at your home or office.</strong>
            </h3>
            <p className="text-center">Our certified mobile mechanics come to you 7 days a week between 7 AM and 7
                PM.</p>

            <div className="block-broken">
                <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/inspection.jpg" className="image-broken"  alt="broken"/>
            </div>
            <p className="text-center"><strong>How A Diagnostic Works</strong></p>

          <div className="start">
              <div className="how">


                  <ul className="how">
                      <li >Instantly book a certified mobile mechanic to come to you</li>
                      <li>Mechanic diagnoses the problem and quotes necessary repairs: <strong>100$</strong></li>
                      <li>Mechanic replacement parts labor: <strong>from 100$ to 300$ + Parts</strong></li>
                      <li>Your vehicle is ready to go</li>
                      <li>Fair, upfront & transparent pricing for all services</li>
                      <li>Our certified mobile mechanics can come to Cook county, IL now.</li>
                  </ul>
              </div>

          </div>

            <p className="roadside"><strong>Car is not starting Inspection Service</strong></p>
            <p className="mb-0 p-4">A car that fails to start is a rare occurrence in this age of greatly improved
                efficiency and reliability. But it still happens occasionally, and the advanced electronic technologies
                that have made cars better have also made the job of roadside diagnosis difficult, if not impossible,
                for even reasonably handy owners. One of our expert mobile mechanics can provide an expeditious
                diagnosis and provide a quote for any necessary repairs.</p>

            <h3 className="text-center"><strong>Common reasons for this to happen:</strong></h3>
            If the engine cranks, but the car doesn't start:

            <ul>
                <li><strong>Bad fuel pump:</strong> A faulty fuel pump won't deliver fuel to the engine, even if you've
                    just filled up.  Labor: 150$
                </li>
                <li><strong>Bad spark plugs:</strong> Without hot sparks to ignite the fuel charge in each cylinder,
                    there is no combustion and no expansion of the burning mixture. Thus, the engine will not start.  Labor: 100$</li>
                <li><strong>Bad timing belt:</strong> If the timing belt stretches or breaks, the engine will not run.
                    Moreover, continuing to crank the engine may bring the valves into contact with the piston, causing
                    serious engine damage.  Labor: 300$
                </li>
                <li><strong>Bad ignition coil:</strong> Without a functional coil to step up the voltage, there can be
                    no spark. No spark means no start.  Labor: 100$
                </li>
                <li><strong>Faulty cam or crank</strong> sensor: If the sensors are faulty they will either provide no
                    information to the ignition system, or will provide incorrect data. Either way, the engine will not
                    fire.  Labor: 120$
                </li>
            </ul>

            <p>If nothing happens after you turn the key:</p>

            <ul>
                <li><strong> Bad battery or terminals:</strong> Batteries have a finite lifespan, and terminals can
                    loosen or corrode.
                </li>
                <li><strong>Bad starter:</strong> This should be obvious from the response to the key. If nothing
                    happens at all when you turn the key, the starter may have reached the end of its life. Labor from 100$ to 300$
                </li>
                <li><strong>Ignition problem:</strong> This could be due to faulty contacts in the ignition switch, or
                    in the wiring.
                </li>
            </ul>
            If there is a grinding noise when you turn the key:
            <ul>
                <li><strong>Starter is bad:</strong> Do not persist in cranking the engine. Labor from 100$ to 300$
                </li>
            </ul>


            <strong>What to expect: </strong>
            <p>A top-rated mobile mechanic will come to your home or office to determine the cause of your car’s failure
                to start through a series of diagnostic procedures. You will receive an upfront, fair and transparent
                estimate for the necessary repairs. The mechanic will book a follow-up appointment to perform the
                repairs and will bring the required parts and tools. All repairs are covered by our warranty.
            </p>
            <strong>How it's done: </strong>
            <p>The mechanic will check the ignition system, fuel system, and charging system, and then look for any
                mechanical damage. The mechanic may also try an alternative fuel source, like a quick shot of brake or
                carburetor cleaner into the throttle body, or a quick shot of liquid fuel via a vacuum line. If the car
                starts momentarily and then dies, that indicates that you have a fuel delivery issue.
            </p>
            <strong>How important is this service? </strong>
            <p>It goes without saying that a non-starting car is an important issue to address. Do not ignore or abandon
                the car if it’s not starting; this is an issue that should be dealt with promptly. Book a mechanic to
                perform a thorough diagnostic as soon as possible.
            </p>
            <p className="text-center"><strong>Fast and easy service at your home or office</strong></p>


            <p className="mb-0 text-center"><strong>We provide the lowest rates in the area.</strong></p>
            <p className="pb-4 mb-0 text-center"><strong>Call Today for a free quote!</strong></p>

            <p className="mb-0 text-center">
                <a className="btn btn-primary btn-lg mb-4" href="https://dgmexpress.me" role="button" onClick={()=>scrollToTop()}>BOOK NOW</a>
            </p>
        </div>
    )
}

export default DidStart
