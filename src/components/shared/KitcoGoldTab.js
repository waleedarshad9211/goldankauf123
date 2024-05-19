"use client";
import {
  GoldankaufKotenloserArray,
  KitcoGoldTabArrayGold,
  KitcoGoldTabArrayPlatin,
  KitcoGoldTabArraySilber,
  KitcoGoldTabArrayZahngold,
} from "@/public/static/HomepageStatic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Kitco from "/public/assets/img/homepage/home_kitco.png";

const KitcoGoldTab = ({ marginTop = "" }) => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const formattedDateTime = new Intl.DateTimeFormat(
        "en-US",
        options
      ).format(now);
      setCurrentDateTime(formattedDateTime);
    };

    // Update the current date and time every second
    const intervalId = setInterval(updateDateTime, 1000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  return (
    <div className="kitco_wrapper">
      <div
        id="box-prices"
        className="Kitco_gold_tab_wrapper"
        style={{ marginTop: marginTop }}
      >
        <div className="Kitco_gold_tab_wrapper_inner">
          <div className="headline text-center">AKTUELLE ANKAUFKURSE</div>
          <div className="updated">
            <p className="paragraph">Erhoben am {currentDateTime} Uhr durch</p>
            <p>
              <Image
                src={Kitco}
                alt="Kitco"
                title="Kitco"
                width={80}
                height={25}
              />
            </p>
          </div>
          <Tabs>
            <>
              <TabList>
                {GoldankaufKotenloserArray.map((tabs, index) => {
                  return (
                    <Tab
                      className={`tab_pill tab_pill${index}`}
                      key={index}
                      style={{
                        width: tabs.width,
                        height: tabs.height,
                      }}
                    >
                      {tabs.tabText}
                    </Tab>
                  );
                })}
              </TabList>

              <TabPanel>
                {KitcoGoldTabArrayGold.map((item, innerIndex) => {
                  return (
                    <ul key={innerIndex} className="tabpanel_ul">
                      <li>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "2px",
                            paddingLeft: "17px",
                            paddingRight: "20px",
                            height: "34px",
                            alignItems: "center",
                            backgroundColor: item.backgroundColor,
                          }}
                        >
                          <p>{item.quantity}</p>
                          <p className="kitco_gold_price">{item.price}</p>
                        </div>
                      </li>
                    </ul>
                  );
                })}
                <div className="kitco_gold_para2">
                  <p className="para2">
                    Für Goldbarren (999er gestempelt) im Neuzustand bis 1g
                    zahlen wir 58,00 €/g
                  </p>
                </div>
                <div className="text-center tabpanel_lastdiv">
                  <p className="para3">Aktualisierung der Ankaufspreise in</p>
                  <p className="para4">
                    {" "}
                    {String(minutes).padStart(2, "0")} Minute{" "}
                    {String(seconds).padStart(2, "0")} Sekunden
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                {KitcoGoldTabArrayZahngold.map((item, innerIndex) => {
                  return (
                    <ul key={innerIndex} className="tabpanel_ul">
                      <li>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "2px",
                            paddingLeft: "17px",
                            paddingRight: "20px",
                            height: "34px",
                            alignItems: "center",
                            backgroundColor: item.backgroundColor,
                          }}
                        >
                          <p>{item.quantity}</p>
                          <p className="kitco_gold_price">{item.price}</p>
                        </div>
                      </li>
                    </ul>
                  );
                })}
                <div className="kitco_gold_para2">
                  <p className="para2">
                    Für Goldbarren (999er gestempelt) im Neuzustand bis 1g
                    zahlen wir 58,00 €/g
                  </p>
                </div>
                <div className="text-center tabpanel_lastdiv">
                  <p className="para3">Aktualisierung der Ankaufspreise in</p>
                  <p className="para4">
                    {" "}
                    {String(minutes).padStart(2, "0")} Minute{" "}
                    {String(seconds).padStart(2, "0")} Sekunden
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                {KitcoGoldTabArraySilber.map((item, innerIndex) => {
                  return (
                    <ul key={innerIndex} className="tabpanel_ul">
                      <li>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "2px",
                            paddingLeft: "17px",
                            paddingRight: "20px",
                            height: "34px",
                            alignItems: "center",
                            backgroundColor: item.backgroundColor,
                          }}
                        >
                          <p>{item.quantity}</p>
                          <p className="kitco_gold_price">{item.price}</p>
                        </div>
                      </li>
                    </ul>
                  );
                })}
                <div className="kitco_gold_para2">
                  <p className="para2">
                    Für Goldbarren (999er gestempelt) im Neuzustand bis 1g
                    zahlen wir 58,00 €/g
                  </p>
                </div>
                <div className="text-center tabpanel_lastdiv">
                  <p className="para3">Aktualisierung der Ankaufspreise in</p>
                  <p className="para4">
                    {" "}
                    {String(minutes).padStart(2, "0")} Minute{" "}
                    {String(seconds).padStart(2, "0")} Sekunden
                  </p>
                </div>
              </TabPanel>
              <TabPanel>
                {KitcoGoldTabArrayPlatin.map((item, innerIndex) => {
                  return (
                    <ul key={innerIndex} className="tabpanel_ul">
                      <li>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "2px",
                            paddingLeft: "17px",
                            paddingRight: "20px",
                            height: "34px",
                            alignItems: "center",
                            backgroundColor: item.backgroundColor,
                          }}
                        >
                          <p>{item.quantity}</p>
                          <p className="kitco_gold_price">{item.price}</p>
                        </div>
                      </li>
                    </ul>
                  );
                })}
                <div className="kitco_gold_para2">
                  <p className="para2">
                    Für Goldbarren (999er gestempelt) im Neuzustand bis 1g
                    zahlen wir 58,00 €/g
                  </p>
                </div>
                <div className="text-center tabpanel_lastdiv">
                  <p className="para3">Aktualisierung der Ankaufspreise in</p>
                  <p className="para4">
                    {" "}
                    {String(minutes).padStart(2, "0")} Minute{" "}
                    {String(seconds).padStart(2, "0")} Sekunden
                  </p>
                </div>
              </TabPanel>
            </>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default KitcoGoldTab;
