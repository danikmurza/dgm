import React from "react"
import {scrollToTop} from "./Footer";

const BatteryReplacement = () => {
    return (
        <div className="about-us pl-5 pr-4">
            <h3 className="roadside"><strong>Car Battery Replacement at your home or office</strong>
            </h3>
            <p className="text-center">Our certified mobile mechanics come to you 7 days a week between 7 AM and 7
                PM.</p>

            <div className="block-broken">
                <img src="https://dgmimages.s3.us-east-2.amazonaws.com/images/replacement-battery.jpg" className="image-broken" alt="broken"/>
            </div>
            <p className="text-center"><strong>How much does Car Battery Replacement cost?</strong></p>

            <div className="start">
                <div className="how">


                    <ul className="how">
                        <li>Labor: 100$</li>
                        <li>+ Battery</li>
                    </ul>
                </div>

            </div>

            <p className="roadside"><strong>Car Battery Replacement Service</strong></p>
            <p className="mb-0 p-4">A car battery is an energy storage device that relies on a chemical reaction within
                the battery to produce electricity. The stored electrical energy is used to initially operate the
                starter motor, ignition system, and fuel system on your vehicle. Once your car engine is running, the
                alternator supplies the electricity needed for all vehicle systems and charges the battery to replace
                the electric energy used when starting a car.</p>
            <p className="mb-0 p-4">Most electric vehicles have a traction battery which is in addition to the standard
                12 volt battery that is used to start the car engine. Traction batteries also convert chemical energy to
                supply electrical energy but operate at higher voltages and often are monitored by the PCM (Powertrain
                Control Module).</p>

            <h3><strong>When to replace a car battery?</strong></h3>


            <ul>
                <li><strong>Your car doesn’t start.</strong> A new battery has a specified capacity to provide power.
                    This capacity is referred to as the cranking amps rating of the battery. As a battery ages, the
                    actual amps that a battery can supply becomes lower than its original rating Once the cranking amps
                    fall below a critical threshold, it will be difficult or impossible to start your car.
                </li>
                <li><strong>Battery or charging system warning light is illuminated. </strong> Should a battery or
                    charging system warning light illuminate, a mechanic should perform a few basic tests to determine
                    if a battery replacement is needed.
                </li>
                <li><strong>Electrical components don’t work.</strong> Once a battery has started to fail, and the
                    voltage produced by the battery drops, then vehicle electrical components can malfunction, such as
                    the security system. If you are experiencing electrical malfunctions, it’s a smart idea to have the
                    battery tested.
                </li>
            </ul>

            <p><strong>How do mechanics replace the battery?</strong></p>

            <ul>
                <li>A temporary power source might be installed to avoid the possibility of losing radio presets or
                    stored data in the PCM while the battery is out. When the battery is already completely dead, this
                    step is unnecessary.
                </li>
                <li>The vehicle’s negative cable is removed from the battery, followed by the positive cable. The
                    battery tie down system is loosened and the old battery removed.
                </li>
                <li>Cable ends and wiring are carefully inspected to ensure cleanliness and no corrosion. In some cases,
                    corrosion can be extreme and the cable may need to be replaced or wiring repaired.
                </li>
                <li>The new battery is installed and the tie down system is reinstalled. Anti-corrosion compound is
                    applied to the battery terminals. The positive terminal is reconnected followed by the negative
                    terminal.
                </li>
                <li>Some vehicles, for example some models of BMW, VW, and Audi, may require PCM programming to input
                    battery parameters. This step, performed using a specialized scan tool, is necessary to maximize
                    battery life and prevent electrical system malfunctions.
                </li>
                <li>The car is started and charging system output is measured and compared against the factory OEM
                    specification to ensure that the new battery will properly recharge. Generally, charging output will
                    be in the range of 13.8 to 14.8 volts but the exact specifications vary by make and model.
                </li>
            </ul>
            <p><strong>Is it safe to drive with a battery problem?</strong></p>
            <p>Yes, but if you have a weak battery you might be left stranded somewhere if the battery dies completely and you cannot start your car. A faulty battery may also needlessly overload the alternator and could adversely affect the operation of the vehicle’s electrical system, including the vehicle security system and the shift interlock.</p>
            <p><strong>When replacing the battery keep in mind:</strong></p>
            <ul>
                <li>The quality of the electrical connections to the battery posts is important. Connections must be clean, free of corrosion and properly tightened.</li>
                <li>Batteries store a large amount of energy and if short-circuited a battery could explode and can create intense discharges that can damage your eyesight. Insulated tools should be used to attach cabling to battery terminals. Otherwise, the battery’s positive cable can be shorted to ground or the positive and negative posts can be directly shorted. Batteries can only be safely installed from a positive terminal to positive wiring and from a negative terminal to body ground. If the polarity is reversed damage will likely occur to the vehicle’s electrical system.</li>
                <li>Generally, a car battery will have a service life of 4 to 7 years. If a load test on a battery reveals a significant reduction in the capacity of the battery to provide power, you should buy a new battery rather than wait for the old battery to fail completely.</li>
                <li>Batteries should only be disconnected if the engine is off and the alternator is not running. Disconnecting a car battery while the alternator is running can cause a voltage spike that will damage sensitive electronic components in the vehicle, such as the PCM.</li>
            </ul>
            <p className="text-center"><strong>Fast and easy service at your home or office</strong></p>


            <p className="mb-0 text-center"><strong>We provide the lowest rates in the area.</strong></p>
            <p className="pb-4 mb-0 text-center"><strong>Call Today for a free quote!</strong></p>

            <p className="mb-0 text-center">
                <a className="btn btn-primary btn-lg mb-4" href="https://dgmexpress.me" role="button" onClick={()=>scrollToTop()}>BOOK NOW</a>
            </p>
        </div>
    )
}


export default BatteryReplacement
