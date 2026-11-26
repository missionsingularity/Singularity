import styles from "./styles.module.css"
import States from "./States"
import RevealWatcher from "./RevealWatcher"
import { SvgGraphic } from "./RichText"
import NavigationBar from "./NavigationBar"
import Button from "./Button"
import Button2 from "./Button2"
import Button3 from "./Button3"
import ArrowRight from "./ArrowRight"
import PromptCard from "./PromptCard"
import Check from "./Check"
import Paperclip from "./Paperclip"
import ArrowUp from "./ArrowUp"
import Command from "./Command"
import RefreshCw from "./RefreshCw"
import Sparkles from "./Sparkles"
import UICardLoading from "./UICardLoading"
import Grid from "./Grid"
import FeatureIndicator from "./FeatureIndicator"
import Search2 from "./Search2"
import TextWave from "./TextWave"
import TextWave2 from "./TextWave2"
import UserRolesCard from "./UserRolesCard"
import ChevronDown from "./ChevronDown"
import Anchor from "./Anchor"
import MultimodalCard from "./MultimodalCard"
import FileText from "./FileText"
import Music from "./Music"
import Video from "./Video"
import Compass from "./Compass"
import Edit from "./Edit"
import AlignLeft from "./AlignLeft"
import MessageCircle from "./MessageCircle"
import Video2 from "./Video2"
import CapabilityCard from "./CapabilityCard"
import TextWave3 from "./TextWave3"
import TextWave4 from "./TextWave4"
import Activity from "./Activity"
import MetricsCard from "./MetricsCard"
import IndustryCard from "./IndustryCard"
import DottedIcon from "./DottedIcon"
import IndustryCard2 from "./IndustryCard2"
import Code from "./Code"
import PricingToggleCards from "./PricingToggleCards"
import PricingPlanCard from "./PricingPlanCard"
import SlotCounter from "./SlotCounter"
import PricingList from "./PricingList"
import CheckCircle from "./CheckCircle"
import Button4 from "./Button4"
import Shield from "./Shield"
import Award from "./Award"
import AlertTriangle from "./AlertTriangle"
import FAQsCardContainer from "./FAQsCardContainer"
import FAQCard from "./FAQCard"
import Minus from "./Minus"
import Plus from "./Plus"
import Footer from "./Footer"
import Template2 from "./Template2"
import Framer from "./Framer"
import Text from "./Text"

export default function Home({ slots = [] }: { slots?: string[] }) {
  return (
    <>
      <RevealWatcher />
      <div className={styles["div-113"]}>
        <div className={styles["div-114"]}>
          <div className={styles["div-115"]}>
            <div className={styles["div-116"]}>
              <div className={styles["div-117"]}>
                <NavigationBar slots={["https://framerusercontent.com/images/zXeV3rNdqpRtATyUuajWNzXy7jg.svg?width=109&height=155","Singularity","Features","Capabilities","Implementation","Security","Log in"]} />
              </div>
            </div>
          </div>
          <div className={styles["div-118"]}>
            <main className={styles["main"]}>
              <section className={styles["hero"]}>
                <div className={styles["content-container"]}>
                  <div className={styles["container-4"]}>
                    <div className={styles["text-button-ui"]}>
                      <div className={styles["text-button"]}>
                        <div className={styles["heading-body"]}>
                          <div className={styles["tag"]}>
                            <div className={styles["image"]}>
                              <div className={styles["div-119"]}>
                                <img className={styles["img-6"]} src={slots[0] ?? "https://framerusercontent.com/images/5cmA4o0fHeVJdJmtF1GSXOM6Io.png?scale-down-to=512&width=3677&height=3677"} alt="" />
                              </div>
                            </div>
                            <div className={styles["div-17"]}>
                              <p className={styles["p-65"]}>{slots[1] ?? "Backed by IIT Guwahati"}</p>
                            </div>
                          </div>
                          <div className={styles["div-120"]}>
                            <h1 className={styles["h1"]}>
                              <div className={styles["span-42"]}>
                                <span className={styles["span-43"]}>{slots[2] ?? "A"}</span>
                              </div>
                              <div className={styles["span-42"]}>
                                <span className={styles["span-44"]}>{slots[3] ?? "s"}</span>
                                <span className={styles["span-45"]}>{slots[4] ?? "m"}</span>
                                <span className={styles["span-46"]}>{slots[5] ?? "a"}</span>
                                <span className={styles["span-47"]}>{slots[6] ?? "r"}</span>
                                <span className={styles["span-48"]}>{slots[7] ?? "t"}</span>
                                <span className={styles["span-49"]}>{slots[8] ?? "e"}</span>
                                <span className={styles["span-47"]}>{slots[9] ?? "r"}</span>
                              </div>
                              <div className={styles["span-42"]}>
                                <span className={styles["span-50"]}>{slots[10] ?? "w"}</span>
                                <span className={styles["span-46"]}>{slots[11] ?? "a"}</span>
                                <span className={styles["span-51"]}>{slots[12] ?? "y"}</span>
                              </div>
                              <div className={styles["span-42"]}>
                                <span className={styles["span-48"]}>{slots[13] ?? "t"}</span>
                                <span className={styles["span-52"]}>{slots[14] ?? "o"}</span>
                              </div>
                              <div className={styles["span-42"]}>
                                <span className={styles["span-53"]}>{slots[15] ?? "g"}</span>
                                <span className={styles["span-49"]}>{slots[16] ?? "e"}</span>
                                <span className={styles["span-48"]}>{slots[17] ?? "t"}</span>
                              </div>
                              <div className={styles["span-42"]}>
                                <span className={styles["span-48"]}>{slots[18] ?? "t"}</span>
                                <span className={styles["span-49"]}>{slots[19] ?? "h"}</span>
                                <span className={styles["span-54"]}>{slots[20] ?? "i"}</span>
                                <span className={styles["span-49"]}>{slots[21] ?? "n"}</span>
                                <span className={styles["span-53"]}>{slots[22] ?? "g"}</span>
                                <span className={styles["span-44"]}>{slots[23] ?? "s"}</span>
                              </div>
                              <div className={styles["span-42"]}>
                                <span className={styles["span-53"]}>{slots[24] ?? "d"}</span>
                                <span className={styles["span-52"]}>{slots[25] ?? "o"}</span>
                                <span className={styles["span-49"]}>{slots[26] ?? "n"}</span>
                                <span className={styles["span-49"]}>{slots[27] ?? "e"}</span>
                              </div>
                            </h1>
                          </div>
                          <div className={styles["div-104"]}>
                            <p className={styles["p-66"]}>{slots[28] ?? "Turn everyday goals into clear, manageable actions for you and your team."}</p>
                          </div>
                        </div>
                        <div className={styles["button-container"]}>
                          <div className={styles["div-116"]}>
                            <div className={styles["div-121"]}>
                              <Button2 slots={["Explore features"]} />
                            </div>
                          </div>
                          <div className={styles["div-116"]}>
                            <div className={styles["div-105"]}>
                              <Button3 slots={["Get started"]} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-116"]}>
                      <div className={styles["bg"]}>
                        <div className={styles["div-122"]}>
                          <img className={styles["img-7"]} src={slots[29] ?? "https://framerusercontent.com/images/7hinuK1ca5NnE0jxQx6Xp0Rgc.png?scale-down-to=2048&width=2400&height=1602"} alt="" />
                        </div>
                        <div className={styles["div-123"]}>
                          <PromptCard slots={["Connect the tools and information available in my workspace.","I found your connected tools, documents, and recent activity. I’ve organized the available information so it’s ready to support your next request.","View connect information","Create a plan from this context","Choose what to include","Suggestions","Thinking completed","Your reply.."]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["logos"]}>
                <div className={styles["content-container-2"]}>
                  <div className={styles["content"]}>
                    <div className={styles["heading-tag"]}>
                      <div className={styles["heading-description-2"]}>
                        <div className={styles["div-124"]}>
                          <p className={styles["p-67"]}>{slots[30] ?? "Integrates seamlessly with your legacy software"}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-125"]}>
                      <div className={styles["div-116"]}>
                        <section className={styles["section"]}>
                          <div className={styles["div-126"]}>
                            <div className={styles["div-127"]}>
                              <div className={styles["div-128"]}>
                                <div className={styles["div-129"]}>
                                  <img className={styles["img-8"]} src={slots[31] ?? "https://framerusercontent.com/images/tgfAUxm27j5JfnNyyl0TgtuF5k.png?width=400&height=115"} alt="" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["how-it-works"]}>
                <div className={styles["content-container-3"]}>
                  <div className={styles["content-2"]}>
                    <div className={styles["heading-tag-2"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-130"]}>
                          <div className={styles["active"]}>
                            <Command slots={[]} />
                            <div className={styles["div-131"]}>
                              <p className={styles["p-68"]}>{slots[32] ?? "How it works"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["heading-description-3"]}>
                        <div className={styles["div-132"]}>
                          <h2 className={styles["h2-2"]}>{slots[33] ?? "From idea to outcome, in 3 steps."}</h2>
                        </div>
                        <div className={styles["div-104"]}>
                          <p className={styles["p-66"]}>{slots[34] ?? "Start with a goal, add context, follow a clear plan, and move work forward."}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["card-content"]}>
                      <div className={styles["how-it-works-card"]}>
                        <div className={styles["div-116"]}>
                          <div className={styles["content-3"]}>
                            <div className={styles["div-133"]}>
                              <img className={styles["img-9"]} src={slots[35] ?? "https://framerusercontent.com/images/svSq1hHi3TFnZce7BPcnb7uXyFw.png?scale-down-to=512&width=2400&height=1602"} alt="" />
                            </div>
                            <States
                              a={<>
                                <div className={styles["prompt-card-2"]}>
                                  <div className={styles["div-134"]}>
                                    <div className={styles["div-135"]}>
                                      <div className={styles["span-55"]}>
                                        {"Summarise all exp"}
                                        <div className={styles["span-56"]} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles["prompt-bar-7"]}>
                                    <div className={styles["new-suggestion"]}>
                                      <RefreshCw slots={[]} />
                                      <div className={styles["div-136"]}>
                                        <p className={styles["p-69"]}>{"New suggestion"}</p>
                                      </div>
                                    </div>
                                    <div className={styles["bar-right-2"]}>
                                      <Paperclip slots={[]} />
                                      <SvgGraphic className={styles["svg-2"]} html={"<svg class=\"framer-cnenU framer-dq4v28\" role=\"presentation\" viewBox=\"0 0 24 24\" data-f2c-idx=\"207\"><use href=\"#3473725508\" data-f2c-idx=\"208\"></use></svg>"} />
                                      <div className={styles["run-agent-2"]}>
                                        <div className={styles["div-137"]}>
                                          <p className={styles["p-70"]}>{"Run agent"}</p>
                                        </div>
                                        <Sparkles slots={[]} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>}
                              b={<>
                                <div className={styles["prompt-card-2"]}>
                                  <div className={styles["div-134"]}>
                                    <div className={styles["div-135"]}>
                                      <div className={styles["span-57"]}>
                                        {"Summarise all expenses from last month by category."}
                                        <div className={styles["span-56"]} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles["prompt-bar-7"]}>
                                    <div className={styles["new-suggestion"]}>
                                      <RefreshCw slots={[]} />
                                      <div className={styles["div-136"]}>
                                        <p className={styles["p-69"]}>{"New suggestion"}</p>
                                      </div>
                                    </div>
                                    <div className={styles["bar-right-2"]}>
                                      <Paperclip slots={[]} />
                                      <SvgGraphic className={styles["svg-7"]} html={"<svg class=\"framer-cnenU framer-dq4v28\" role=\"presentation\" viewBox=\"0 0 24 24\" data-f2c-idx=\"207\"><use href=\"#3473725508\" data-f2c-idx=\"208\"></use></svg>"} />
                                      <div className={styles["run-agent-2"]}>
                                        <div className={styles["div-137"]}>
                                          <p className={styles["p-70"]}>{"Run agent"}</p>
                                        </div>
                                        <Sparkles slots={[]} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </>}
                            />
                          </div>
                        </div>
                        <div className={styles["heading-description-4"]}>
                          <div className={styles["div-138"]}>
                            <h5 className={styles["h5-3"]}>{slots[36] ?? "Share your goal"}</h5>
                          </div>
                          <div className={styles["div-139"]}>
                            <p className={styles["p-71"]}>{slots[37] ?? "Tell us what you want to accomplish, whether it’s a simple task or a larger project."}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["how-it-works-card"]}>
                        <div className={styles["div-116"]}>
                          <div className={styles["content-3"]}>
                            <div className={styles["div-133"]}>
                              <img className={styles["img-10"]} src={slots[38] ?? "https://framerusercontent.com/images/7JLgNnHNWS2ZheqZrTXBTaVCv6Q.png?scale-down-to=512&width=2400&height=1600"} alt="" />
                            </div>
                            <div className={styles["div-140"]}>
                              <div className={styles["div-141"]}>
                                <div className={styles["div-142"]}>
                                  <div className={styles["div-143"]}>
                                    <img className={styles["img-11"]} src={slots[39] ?? "https://framerusercontent.com/images/ghA1dv8Ec7AjGLyCNKFyk2YW2Y.png?width=512&height=512"} alt="" />
                                  </div>
                                  <div className={styles["div-143"]}>
                                    <img className={styles["img-11"]} src={slots[40] ?? "https://framerusercontent.com/images/cu4MfUe9qRDMpZkhNA7m7eIhaM.png?width=512&height=512"} alt="" />
                                  </div>
                                  <div className={styles["div-143"]}>
                                    <img className={styles["img-11"]} src={slots[41] ?? "https://framerusercontent.com/images/nETSPvMOZHE9F2AVkfuiTnVEI.png?width=512&height=512"} alt="" />
                                  </div>
                                </div>
                                <div className={styles["div-144"]}>
                                  <div className={styles["div-145"]}>
                                    <img className={styles["img-12"]} src={slots[42] ?? "https://framerusercontent.com/images/zXeV3rNdqpRtATyUuajWNzXy7jg.svg?width=109&height=155"} alt="" />
                                  </div>
                                </div>
                                <div className={styles["div-142"]}>
                                  <div className={styles["div-143"]}>
                                    <img className={styles["img-11"]} src={slots[43] ?? "https://framerusercontent.com/images/Bdk9u0YFihVafXCtWkTxTzKmFu4.png?width=512&height=512"} alt="" />
                                  </div>
                                  <div className={styles["div-143"]}>
                                    <img className={styles["img-11"]} src={slots[44] ?? "https://framerusercontent.com/images/zxWuBWsLWrG577sK8JjS6ztMbo.png?width=512&height=512"} alt="" />
                                  </div>
                                  <div className={styles["div-143"]}>
                                    <img className={styles["img-11"]} src={slots[45] ?? "https://framerusercontent.com/images/tA26PW4Ptu6P0TTTuRjOs0Jsvs.png?width=512&height=512"} alt="" />
                                  </div>
                                </div>
                                <SvgGraphic className={styles["svg-8"]} html={"<svg fill=\"none\" width=\"352\" height=\"256\" viewBox=\"0 0 352 256\" xmlns=\"http://www.w3.org/2000/svg\" style=\"pointer-events:none;position:absolute;left:0;top:0;transform:translateZ(0)\" data-f2c-idx=\"243\"><g data-f2c-idx=\"244\"><path d=\"M 48,48 Q 112,94.875 176,118\" stroke=\"var(--token-b39a48ae-2f48-4067-9b92-9d8fcfd251a1, rgb(9, 174, 255))\" stroke-width=\"3\" stroke-opacity=\"0.35\" stroke-linecap=\"round\" data-f2c-idx=\"245\"></path><path d=\"M 48,48 Q 112,94.875 176,118\" stroke=\"url(#beam-:R1n9tkelalp:-0)\" stroke-width=\"3\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"246\"></path><defs data-f2c-idx=\"247\"><linearGradient id=\"beam-:R1n9tkelalp:-0\" gradientUnits=\"userSpaceOnUse\" x1=\"108.2%\" x2=\"98.2%\" y1=\"0%\" y2=\"0%\" will-change=\"auto\" data-f2c-idx=\"248\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"249\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"250\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"251\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"252\"></stop></linearGradient></defs></g><g data-f2c-idx=\"253\"><path d=\"M 48,128 Q 112,128 176,128\" stroke=\"var(--token-b39a48ae-2f48-4067-9b92-9d8fcfd251a1, rgb(9, 174, 255))\" stroke-width=\"3\" stroke-opacity=\"0.35\" stroke-linecap=\"round\" data-f2c-idx=\"254\"></path><path d=\"M 48,128 Q 112,128 176,128\" stroke=\"url(#beam-:R1n9tkelalp:-1)\" stroke-width=\"3\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"255\"></path><defs data-f2c-idx=\"256\"><linearGradient id=\"beam-:R1n9tkelalp:-1\" gradientUnits=\"userSpaceOnUse\" x1=\"52.69565%\" x2=\"42.69565%\" y1=\"0%\" y2=\"0%\" will-change=\"auto\" data-f2c-idx=\"257\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"258\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"259\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"260\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"261\"></stop></linearGradient></defs></g><g data-f2c-idx=\"262\"><path d=\"M 48,208 Q 112,161.125 176,138\" stroke=\"var(--token-b39a48ae-2f48-4067-9b92-9d8fcfd251a1, rgb(9, 174, 255))\" stroke-width=\"3\" stroke-opacity=\"0.35\" stroke-linecap=\"round\" data-f2c-idx=\"263\"></path><path d=\"M 48,208 Q 112,161.125 176,138\" stroke=\"url(#beam-:R1n9tkelalp:-2)\" stroke-width=\"3\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"264\"></path><defs data-f2c-idx=\"265\"><linearGradient id=\"beam-:R1n9tkelalp:-2\" gradientUnits=\"userSpaceOnUse\" x1=\"96.375%\" x2=\"86.375%\" y1=\"0%\" y2=\"0%\" will-change=\"auto\" data-f2c-idx=\"266\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"267\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"268\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"269\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"270\"></stop></linearGradient></defs></g><g data-f2c-idx=\"271\"><path d=\"M 304,48 Q 240,94.875 176,118\" stroke=\"var(--token-b39a48ae-2f48-4067-9b92-9d8fcfd251a1, rgb(9, 174, 255))\" stroke-width=\"3\" stroke-opacity=\"0.35\" stroke-linecap=\"round\" data-f2c-idx=\"272\"></path><path d=\"M 304,48 Q 240,94.875 176,118\" stroke=\"url(#beam-:R1n9tkelalp:-3)\" stroke-width=\"3\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"273\"></path><defs data-f2c-idx=\"274\"><linearGradient id=\"beam-:R1n9tkelalp:-3\" gradientUnits=\"userSpaceOnUse\" x1=\"-2.48276%\" x2=\"7.51724%\" y1=\"0%\" y2=\"0%\" will-change=\"auto\" data-f2c-idx=\"275\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"276\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"277\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"278\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"279\"></stop></linearGradient></defs></g><g data-f2c-idx=\"280\"><path d=\"M 304,128 Q 240,128 176,128\" stroke=\"var(--token-b39a48ae-2f48-4067-9b92-9d8fcfd251a1, rgb(9, 174, 255))\" stroke-width=\"3\" stroke-opacity=\"0.35\" stroke-linecap=\"round\" data-f2c-idx=\"281\"></path><path d=\"M 304,128 Q 240,128 176,128\" stroke=\"url(#beam-:R1n9tkelalp:-4)\" stroke-width=\"3\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"282\"></path><defs data-f2c-idx=\"283\"><linearGradient id=\"beam-:R1n9tkelalp:-4\" gradientUnits=\"userSpaceOnUse\" x1=\"72.63636%\" x2=\"82.63636%\" y1=\"0%\" y2=\"0%\" will-change=\"auto\" data-f2c-idx=\"284\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"285\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"286\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"287\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"288\"></stop></linearGradient></defs></g><g data-f2c-idx=\"289\"><path d=\"M 304,208 Q 240,161.125 176,138\" stroke=\"var(--token-b39a48ae-2f48-4067-9b92-9d8fcfd251a1, rgb(9, 174, 255))\" stroke-width=\"3\" stroke-opacity=\"0.35\" stroke-linecap=\"round\" data-f2c-idx=\"290\"></path><path d=\"M 304,208 Q 240,161.125 176,138\" stroke=\"url(#beam-:R1n9tkelalp:-5)\" stroke-width=\"3\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"291\"></path><defs data-f2c-idx=\"292\"><linearGradient id=\"beam-:R1n9tkelalp:-5\" gradientUnits=\"userSpaceOnUse\" x1=\"24.53333%\" x2=\"34.53333%\" y1=\"0%\" y2=\"0%\" will-change=\"auto\" data-f2c-idx=\"293\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"294\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"295\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"296\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"297\"></stop></linearGradient></defs></g></svg>"} />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["heading-description-4"]}>
                          <div className={styles["div-138"]}>
                            <h5 className={styles["h5-3"]}>{slots[46] ?? "Add the right context"}</h5>
                          </div>
                          <div className={styles["div-139"]}>
                            <p className={styles["p-71"]}>{slots[47] ?? "Connect the information, tools, and people needed to understand the work."}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["how-it-works-card"]}>
                        <div className={styles["div-116"]}>
                          <div className={styles["content-3"]}>
                            <div className={styles["div-133"]}>
                              <img className={styles["img-10"]} src={slots[48] ?? "https://framerusercontent.com/images/3zE3eLjjpwMLVNUEK5PAUEZaCJk.png?scale-down-to=512&width=2400&height=1600"} alt="" />
                            </div>
                            <div className={styles["desktop-8"]}>
                              <div className={styles["agent-working"]}>
                                <div className={styles["div-146"]}>
                                  <div className={styles["div-147"]}>
                                    <div className={styles["div-50"]}>
                                      <div className={styles["div-148"] + " " + styles["loop-10"]} />
                                      <div className={styles["div-51"] + " " + styles["loop-11"]} />
                                      <div className={styles["div-51"] + " " + styles["loop-12"]} />
                                      <div className={styles["div-51"] + " " + styles["loop-13"]} />
                                      <div className={styles["div-51"] + " " + styles["loop-14"]} />
                                      <div className={styles["div-51"] + " " + styles["loop-15"]} />
                                      <div className={styles["div-51"] + " " + styles["loop-16"]} />
                                      <div className={styles["div-51"] + " " + styles["loop-17"]} />
                                      <div className={styles["div-51"] + " " + styles["loop-18"]} />
                                    </div>
                                  </div>
                                </div>
                                <div className={styles["div-149"]}>
                                  <h6 className={styles["h6-8"]}>{slots[49] ?? "Agent running"}</h6>
                                </div>
                              </div>
                              <div className={styles["divider"]} />
                              <div className={styles["list-9"]}>
                                <div className={styles["div-150"]}>
                                  <UICardLoading slots={["Collecting recent updates"]} />
                                </div>
                                <div className={styles["div-150"]}>
                                  <UICardLoading slots={["Identifying completed work"]} />
                                </div>
                                <div className={styles["div-150"]}>
                                  <UICardLoading slots={["Reviewing open decisions"]} />
                                </div>
                                <div className={styles["div-150"]}>
                                  <UICardLoading slots={["Preparing recommended actions"]} />
                                </div>
                                <div className={styles["div-150"]}>
                                  <UICardLoading slots={["Creating the final brief"]} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["heading-description-4"]}>
                          <div className={styles["div-138"]}>
                            <h5 className={styles["h5-3"]}>{slots[50] ?? "Review and move forward"}</h5>
                          </div>
                          <div className={styles["div-139"]}>
                            <p className={styles["p-71"]}>{slots[51] ?? "Track progress, review important decisions, and approve actions before they happen."}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["features"]}>
                <div className={styles["content-container-4"]}>
                  <div className={styles["content-4"]}>
                    <div className={styles["heading-tag-3"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-151"]}>
                          <div className={styles["active-2"]}>
                            <Grid slots={[]} />
                            <div className={styles["div-152"]}>
                              <p className={styles["p-72"]}>{slots[52] ?? "Features"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["heading-description-5"]}>
                        <div className={styles["div-132"]}>
                          <h2 className={styles["h2-3"]}>{slots[53] ?? "Powerful features that are simple to use"}</h2>
                        </div>
                        <div className={styles["div-104"]}>
                          <p className={styles["p-73"]}>{slots[54] ?? "Find information faster, automate repetitive work, monitor activity, and customize everything."}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["feature-indicator-card"]}>
                      <div className={styles["feature-indicator-container"]}>
                        <div className={styles["div-116"]}>
                          <div className={styles["div-153"]}>
                            <FeatureIndicator slots={["01","Intelligent search"]} />
                          </div>
                        </div>
                        <div className={styles["div-116"]}>
                          <div className={styles["div-153"]}>
                            <FeatureIndicator slots={["02","Workflow automation"]} />
                          </div>
                        </div>
                        <div className={styles["div-116"]}>
                          <div className={styles["div-153"]}>
                            <FeatureIndicator slots={["03","Live activity"]} />
                          </div>
                        </div>
                        <div className={styles["div-116"]}>
                          <div className={styles["div-153"]}>
                            <FeatureIndicator slots={["04","Flexible workspace"]} />
                          </div>
                        </div>
                      </div>
                      <div className={styles["feature-card-container"]}>
                        <div className={styles["feature-card-container-2"]}>
                          <div className={styles["feature-card"]}>
                            <div className={styles["step-info"]}>
                              <div className={styles["text-tags"]}>
                                <div className={styles["heading-description-6"]}>
                                  <div className={styles["div-154"]}>
                                    <h5 className={styles["h5-4"]}>{slots[55] ?? "Find answers across all your work"}</h5>
                                  </div>
                                  <div className={styles["div-155"]}>
                                    <p className={styles["p-74"]}>{slots[56] ?? "Search documents, conversations, projects, and connected tools from one place using everyday language."}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-116"]}>
                              <div className={styles["content-5"]}>
                                <div className={styles["div-156"]}>
                                  <img className={styles["img-13"]} src={slots[57] ?? "https://framerusercontent.com/images/7hinuK1ca5NnE0jxQx6Xp0Rgc.png?scale-down-to=2048&width=2400&height=1602"} alt="" />
                                </div>
                                <div className={styles["search"]}>
                                  <div className={styles["prompt-card-3"]}>
                                    <div className={styles["search-bar"]}>
                                      <Search2 slots={[]} />
                                      <div className={styles["div-157"]}>
                                        <TextWave slots={["S","e","a","r","c","h","i","n","g","a","c","r","o","s","s","y","o","u","r","s","y","s","t","e","m"]} />
                                      </div>
                                    </div>
                                    <div className={styles["search-results"]}>
                                      <div className={styles["info-container"]}>
                                        <ul className={styles["ul-3"] + " " + styles["rv-4"]} data-reveal>
                                          <li className={styles["li-11"]}>
                                            <div className={styles["div-158"]}>
                                              <p className={styles["p-75"]}>{slots[58] ?? "Documents"}</p>
                                            </div>
                                          </li>
                                          <li className={styles["li-12"]}>
                                            <div className={styles["div-158"]}>
                                              <p className={styles["p-75"]}>{slots[59] ?? "Conversations"}</p>
                                            </div>
                                          </li>
                                          <li className={styles["li-12"]}>
                                            <div className={styles["div-158"]}>
                                              <p className={styles["p-75"]}>{slots[60] ?? "Tasks"}</p>
                                            </div>
                                          </li>
                                          <li className={styles["li-12"]}>
                                            <div className={styles["div-158"]}>
                                              <p className={styles["p-75"]}>{slots[61] ?? "Connected tool"}</p>
                                            </div>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["feature-card-container-2"]}>
                          <div className={styles["feature-card"]}>
                            <div className={styles["step-info"]}>
                              <div className={styles["text-tags"]}>
                                <div className={styles["heading-description-6"]}>
                                  <div className={styles["div-154"]}>
                                    <h5 className={styles["h5-4"]}>{slots[62] ?? "Automate repetitive work"}</h5>
                                  </div>
                                  <div className={styles["div-155"]}>
                                    <p className={styles["p-74"]}>{slots[63] ?? "Create reliable workflows that handle recurring tasks, updates, notifications, and handoffs automatically."}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-116"]}>
                              <div className={styles["content-5"]}>
                                <div className={styles["div-156"]}>
                                  <img className={styles["img-13"]} src={slots[64] ?? "https://framerusercontent.com/images/uQIV8SHQg9uwGTWj9BcWtwDTp9E.png?scale-down-to=512&width=2400&height=1602"} alt="" />
                                </div>
                                <div className={styles["search-2"]}>
                                  <div className={styles["prompt-card-4"]}>
                                    <div className={styles["div-48"]}>
                                      <div className={styles["div-49"]}>
                                        <div className={styles["div-50"]}>
                                          <div className={styles["div-51"] + " " + styles["loop-19"]} />
                                          <div className={styles["div-159"] + " " + styles["loop-20"]} />
                                          <div className={styles["div-160"] + " " + styles["loop-21"]} />
                                          <div className={styles["div-159"] + " " + styles["loop-22"]} />
                                          <div className={styles["div-160"] + " " + styles["loop-23"]} />
                                          <div className={styles["div-160"] + " " + styles["loop-24"]} />
                                          <div className={styles["div-161"] + " " + styles["loop-25"]} />
                                          <div className={styles["div-161"] + " " + styles["loop-26"]} />
                                          <div className={styles["div-162"] + " " + styles["loop-27"]} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles["div-163"]}>
                                      <TextWave2 slots={["A","u","t","o","m","a","t","i","n","g"]} />
                                    </div>
                                  </div>
                                  <div className={styles["searching-suggestions"]}>
                                    <div className={styles["div-164"]}>
                                      <div className={styles["div-165"]}>
                                        <SvgGraphic className={styles["svg-9"]} html={"<svg fill=\"none\" width=\"389.203125\" height=\"170\" viewBox=\"0 0 389.203125 170\" xmlns=\"http://www.w3.org/2000/svg\" style=\"position:absolute;left:0;top:0;pointer-events:none;transform:translateZ(0)\" data-f2c-idx=\"521\"><g data-f2c-idx=\"522\"><path d=\"M 0,0 C 0,88.825 194.6015625,88.825 194.6015625,161.5\" stroke=\"var(--token-fd2642e7-ea40-4298-8994-88ab422747df, rgb(9, 153, 224))\" stroke-width=\"3\" stroke-opacity=\"0.2\" stroke-linecap=\"round\" data-f2c-idx=\"523\"></path><path d=\"M 0,0 C 0,88.825 194.6015625,88.825 194.6015625,161.5\" stroke=\"url(#line-:R1nafikilalp:-0)\" stroke-width=\"3\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"524\"></path><defs data-f2c-idx=\"525\"><linearGradient id=\"line-:R1nafikilalp:-0\" gradientUnits=\"userSpaceOnUse\" x1=\"0%\" x2=\"0%\" y1=\"11.13333%\" y2=\"43.13333%\" will-change=\"auto\" data-f2c-idx=\"526\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"527\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"528\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"529\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"530\"></stop></linearGradient></defs></g><g data-f2c-idx=\"531\"><path d=\"M 194.6015625,0 C 194.6015625,88.825 194.6015625,88.825 194.6015625,161.5\" stroke=\"var(--token-fd2642e7-ea40-4298-8994-88ab422747df, rgb(9, 153, 224))\" stroke-width=\"3\" stroke-opacity=\"0.2\" stroke-linecap=\"round\" data-f2c-idx=\"532\"></path><path d=\"M 194.6015625,0 C 194.6015625,88.825 194.6015625,88.825 194.6015625,161.5\" stroke=\"url(#line-:R1nafikilalp:-1)\" stroke-width=\"3\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"533\"></path><defs data-f2c-idx=\"534\"><linearGradient id=\"line-:R1nafikilalp:-1\" gradientUnits=\"userSpaceOnUse\" x1=\"0%\" x2=\"0%\" y1=\"11.13333%\" y2=\"43.13333%\" will-change=\"auto\" data-f2c-idx=\"535\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"536\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"537\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"538\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"539\"></stop></linearGradient></defs></g><g data-f2c-idx=\"540\"><path d=\"M 389.203125,0 C 389.203125,88.825 194.6015625,88.825 194.6015625,161.5\" stroke=\"var(--token-fd2642e7-ea40-4298-8994-88ab422747df, rgb(9, 153, 224))\" stroke-width=\"3\" stroke-opacity=\"0.2\" stroke-linecap=\"round\" data-f2c-idx=\"541\"></path><path d=\"M 389.203125,0 C 389.203125,88.825 194.6015625,88.825 194.6015625,161.5\" stroke=\"url(#line-:R1nafikilalp:-2)\" stroke-width=\"3\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"542\"></path><defs data-f2c-idx=\"543\"><linearGradient id=\"line-:R1nafikilalp:-2\" gradientUnits=\"userSpaceOnUse\" x1=\"0%\" x2=\"0%\" y1=\"11.13333%\" y2=\"43.13333%\" will-change=\"auto\" data-f2c-idx=\"544\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"545\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"546\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"547\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"548\"></stop></linearGradient></defs></g></svg>"} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["feature-card-container-2"]}>
                          <div className={styles["feature-card"]}>
                            <div className={styles["step-info"]}>
                              <div className={styles["text-tags"]}>
                                <div className={styles["heading-description-6"]}>
                                  <div className={styles["div-154"]}>
                                    <h5 className={styles["h5-4"]}>{slots[65] ?? "See what’s happening in real time"}</h5>
                                  </div>
                                  <div className={styles["div-155"]}>
                                    <p className={styles["p-74"]}>{slots[66] ?? "Follow current activity, completed actions, errors, and upcoming work from one clear operational view."}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-116"]}>
                              <div className={styles["content-5"]}>
                                <div className={styles["div-156"]}>
                                  <img className={styles["img-13"]} src={slots[67] ?? "https://framerusercontent.com/images/GomaCIogYngvxNRqv2ME24dcRUs.png?scale-down-to=512&width=2400&height=1602"} alt="" />
                                </div>
                                <div className={styles["automation"]}>
                                  <div className={styles["automating"]}>
                                    <div className={styles["div-48"]}>
                                      <div className={styles["div-166"] + " " + styles["rv-5"] + " " + styles["loop-28"]} data-reveal />
                                    </div>
                                    <div className={styles["div-167"]}>
                                      <div className={styles["p-76"]}>
                                        <div className={styles["span-58"]}>
                                          <span className={styles["span-59"]}>{slots[68] ?? "S"}</span>
                                          <span className={styles["span-60"]}>{slots[69] ?? "i"}</span>
                                          <span className={styles["span-61"]}>{slots[70] ?? "n"}</span>
                                          <span className={styles["span-62"]}>{slots[71] ?? "g"}</span>
                                          <span className={styles["span-63"]}>{slots[72] ?? "u"}</span>
                                          <span className={styles["span-64"]}>{slots[73] ?? "l"}</span>
                                          <span className={styles["span-65"]}>{slots[74] ?? "a"}</span>
                                          <span className={styles["span-66"]}>{slots[75] ?? "r"}</span>
                                          <span className={styles["span-67"]}>{slots[76] ?? "i"}</span>
                                          <span className={styles["span-68"]}>{slots[77] ?? "t"}</span>
                                          <span className={styles["span-69"]}>{slots[78] ?? "y"}</span>
                                        </div>
                                        <div className={styles["span-70"]}>
                                          <span className={styles["span-71"]}>{slots[79] ?? "i"}</span>
                                          <span className={styles["span-72"]}>{slots[80] ?? "s"}</span>
                                        </div>
                                        <div className={styles["span-73"]}>
                                          <span className={styles["span-74"]}>{slots[81] ?? "a"}</span>
                                          <span className={styles["span-75"]}>{slots[82] ?? "u"}</span>
                                          <span className={styles["span-76"]}>{slots[83] ?? "t"}</span>
                                          <span className={styles["span-77"]}>{slots[84] ?? "o"}</span>
                                          <span className={styles["span-19"]}>{slots[85] ?? "m"}</span>
                                          <span className={styles["span-3"]}>{slots[86] ?? "a"}</span>
                                          <span className={styles["span-4"]}>{slots[87] ?? "t"}</span>
                                          <span className={styles["span-5"]}>{slots[88] ?? "i"}</span>
                                          <span className={styles["span-3"]}>{slots[89] ?? "n"}</span>
                                          <span className={styles["span-2"]}>{slots[90] ?? "g"}</span>
                                        </div>
                                        <div className={styles["span-8"]}>
                                          <span className={styles["span-3"]}>{slots[91] ?? "y"}</span>
                                          <span className={styles["span-3"]}>{slots[92] ?? "o"}</span>
                                          <span className={styles["span-3"]}>{slots[93] ?? "u"}</span>
                                          <span className={styles["span-4"]}>{slots[94] ?? "r"}</span>
                                        </div>
                                        <div className={styles["span-78"]}>
                                          <span className={styles["span-4"]}>{slots[95] ?? "t"}</span>
                                          <span className={styles["span-3"]}>{slots[96] ?? "a"}</span>
                                          <span className={styles["span-7"]}>{slots[97] ?? "s"}</span>
                                          <span className={styles["span-3"]}>{slots[98] ?? "k"}</span>
                                          <span className={styles["span-7"]}>{slots[99] ?? "s"}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles["search-results-2"]}>
                                    <div className={styles["info-container-2"]}>
                                      <ul className={styles["ul-4"] + " " + styles["rv-4"]} data-reveal>
                                        <li className={styles["li-13"]}>
                                          <div className={styles["div-168"]}>
                                            <p className={styles["p-77"]}>{slots[100] ?? "AI handles repetitive tasks in the background, from organizing information and updating records to assigning work and sending notifications. Automated workflows keep everyday processes moving without constant manual input."}</p>
                                            <p className={styles["p-78"]}>{slots[101] ?? "When something needs attention, AI highlights the issue and suggests the next action. Your team can review important decisions, make changes, and approve work before it moves forward."}</p>
                                          </div>
                                        </li>
                                        <li className={styles["li-13"]}>
                                          <div className={styles["div-168"]}>
                                            <p className={styles["p-77"]}>{slots[102] ?? "AI handles repetitive tasks in the background, from organizing information and updating records to assigning work and sending notifications. Automated workflows keep everyday processes moving without constant manual input."}</p>
                                            <p className={styles["p-78"]}>{slots[103] ?? "When something needs attention, AI highlights the issue and suggests the next action. Your team can review important decisions, make changes, and approve work before it moves forward."}</p>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles["feature-card-container-2"]}>
                          <div className={styles["feature-card"]}>
                            <div className={styles["step-info"]}>
                              <div className={styles["text-tags"]}>
                                <div className={styles["heading-description-6"]}>
                                  <div className={styles["div-154"]}>
                                    <h5 className={styles["h5-4"]}>{slots[104] ?? "Control who can see and do what"}</h5>
                                  </div>
                                  <div className={styles["div-155"]}>
                                    <p className={styles["p-74"]}>{slots[105] ?? "Manage access, protect sensitive information, and define clear permissions for every person and team."}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles["div-116"]}>
                              <div className={styles["content-5"]}>
                                <div className={styles["div-156"]}>
                                  <img className={styles["img-13"]} src={slots[106] ?? "https://framerusercontent.com/images/um0Pkcj6XWmxCznDT9BJPaQKV8.png?scale-down-to=512&width=2400&height=1602"} alt="" />
                                </div>
                                <div className={styles["div-169"]}>
                                  <UserRolesCard slots={["https://framerusercontent.com/images/Uwu6oCqaeQirmXZy5Q37Nkh5gE.png?width=90&height=90","Meth Lab","159 Items","Share this folder","https://framerusercontent.com/images/YbIkbpKaq9pmlSfHIsww2gkTTJ4.png?width=74&height=74","Jesse Pinkman","bdech@gmail.com","Can edit","https://framerusercontent.com/images/nKIuCad9RRDJNuMGgFOiKx2ok.png?width=74&height=74","Gustavo Fring","thechickenman@gmail.com","Can view","https://framerusercontent.com/images/cs3yZGn9FSQ4XwD6sY1pFBvg0k.png?width=74&height=74","Saul Goodman","bettercallsaul@gmail.com","Can view","https://framerusercontent.com/images/E6Vvalfnflvfo6p24k9l0apIXc.png?width=74&height=74","Mike Ehrmantraut","poppop@gmail.com","Can view","You"]} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["capabilities"]}>
                <div className={styles["content-container-5"]}>
                  <div className={styles["content-6"]}>
                    <div className={styles["heading-tag-4"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-170"]}>
                          <div className={styles["active-3"]}>
                            <Anchor slots={[]} />
                            <div className={styles["div-171"]}>
                              <p className={styles["p-79"]}>{slots[107] ?? "Capabilities"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["heading-description-7"]}>
                        <div className={styles["div-132"]}>
                          <h2 className={styles["h2-2"]}>{slots[108] ?? "Built to handle complex work."}</h2>
                        </div>
                        <div className={styles["div-172"]}>
                          <p className={styles["p-80"]}>{slots[109] ?? "Advanced intelligence for understanding information, reasoning through problems, and producing reliable outcomes."}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["card-container"]}>
                      <div className={styles["capability-card-container"]}>
                        <div className={styles["capability-card"]}>
                          <div className={styles["div-116"]}>
                            <div className={styles["div-173"]}>
                              <MultimodalCard slots={["Text","Audio","Video","Web page","Text","Audio","Video","Web page","Text","Audio","Video","Web page","Text","Audio","Video","Web page","Documents","Spreadsheets","Conversations","Documents","Spreadsheets","Conversations","Documents","Spreadsheets","Conversations","Documents","Spreadsheets","Conversations"]} />
                            </div>
                          </div>
                          <div className={styles["heading-description-8"]}>
                            <div className={styles["div-174"]}>
                              <h5 className={styles["h5-5"]}>{slots[110] ?? "Multimodal understanding"}</h5>
                            </div>
                            <div className={styles["div-175"]}>
                              <p className={styles["p-81"]}>{slots[111] ?? "Understand every format within one shared context."}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["capability-card-container-2"]}>
                        <div className={styles["capability-card-2"]}>
                          <div className={styles["div-176"]}>
                            <Video2 slots={[]} />
                          </div>
                          <div className={styles["heading-description-9"]}>
                            <div className={styles["div-177"]}>
                              <h5 className={styles["h5-6"]}>{slots[112] ?? "Persistent memory"}</h5>
                            </div>
                            <div className={styles["div-178"]}>
                              <p className={styles["p-82"]}>{slots[113] ?? "Remember preferences, decisions, and important project context."}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["capability-card-container-2"]}>
                        <div className={styles["capability-card-2"]}>
                          <div className={styles["div-179"]}>
                            <div className={styles["div-180"]}>
                              <div className={styles["div-116"]}>
                                <div className={styles["div-181"]}>
                                  <SvgGraphic className={styles["svg-10"]} html={"<svg fill=\"none\" width=\"656\" height=\"302.609375\" viewBox=\"0 0 656 302.609375\" xmlns=\"http://www.w3.org/2000/svg\" style=\"position:absolute;left:0;top:0;pointer-events:none;transform:translateZ(0)\" data-f2c-idx=\"897\"><g data-f2c-idx=\"898\"><path d=\"M 24,302.609375 C 24,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"var(--token-2e8179f9-642e-40f6-a729-9879c38a7c7c, rgba(0, 0, 0, 0.4))\" stroke-width=\"2\" stroke-opacity=\"0.2\" stroke-linecap=\"round\" data-f2c-idx=\"899\"></path><path d=\"M 24,302.609375 C 24,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"url(#line-:Ruqsmlalp:-0)\" stroke-width=\"2\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"900\"></path><defs data-f2c-idx=\"901\"><linearGradient id=\"line-:Ruqsmlalp:-0\" gradientUnits=\"userSpaceOnUse\" x1=\"0%\" x2=\"0%\" y1=\"61.95%\" y2=\"39.95%\" will-change=\"auto\" data-f2c-idx=\"902\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"903\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"904\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"905\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"906\"></stop></linearGradient></defs></g><g data-f2c-idx=\"907\"><path d=\"M 176,302.609375 C 176,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"var(--token-2e8179f9-642e-40f6-a729-9879c38a7c7c, rgba(0, 0, 0, 0.4))\" stroke-width=\"2\" stroke-opacity=\"0.2\" stroke-linecap=\"round\" data-f2c-idx=\"908\"></path><path d=\"M 176,302.609375 C 176,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"url(#line-:Ruqsmlalp:-1)\" stroke-width=\"2\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"909\"></path><defs data-f2c-idx=\"910\"><linearGradient id=\"line-:Ruqsmlalp:-1\" gradientUnits=\"userSpaceOnUse\" x1=\"0%\" x2=\"0%\" y1=\"56.95%\" y2=\"34.95%\" will-change=\"auto\" data-f2c-idx=\"911\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"912\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"913\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"914\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"915\"></stop></linearGradient></defs></g><g data-f2c-idx=\"916\"><path d=\"M 328,302.609375 C 328,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"var(--token-2e8179f9-642e-40f6-a729-9879c38a7c7c, rgba(0, 0, 0, 0.4))\" stroke-width=\"2\" stroke-opacity=\"0.2\" stroke-linecap=\"round\" data-f2c-idx=\"917\"></path><path d=\"M 328,302.609375 C 328,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"url(#line-:Ruqsmlalp:-2)\" stroke-width=\"2\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"918\"></path><defs data-f2c-idx=\"919\"><linearGradient id=\"line-:Ruqsmlalp:-2\" gradientUnits=\"userSpaceOnUse\" x1=\"0%\" x2=\"0%\" y1=\"51.95%\" y2=\"29.95%\" will-change=\"auto\" data-f2c-idx=\"920\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"921\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"922\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"923\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"924\"></stop></linearGradient></defs></g><g data-f2c-idx=\"925\"><path d=\"M 480,302.609375 C 480,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"var(--token-2e8179f9-642e-40f6-a729-9879c38a7c7c, rgba(0, 0, 0, 0.4))\" stroke-width=\"2\" stroke-opacity=\"0.2\" stroke-linecap=\"round\" data-f2c-idx=\"926\"></path><path d=\"M 480,302.609375 C 480,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"url(#line-:Ruqsmlalp:-3)\" stroke-width=\"2\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"927\"></path><defs data-f2c-idx=\"928\"><linearGradient id=\"line-:Ruqsmlalp:-3\" gradientUnits=\"userSpaceOnUse\" x1=\"0%\" x2=\"0%\" y1=\"46.95%\" y2=\"24.95%\" will-change=\"auto\" data-f2c-idx=\"929\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"930\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"931\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"932\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"933\"></stop></linearGradient></defs></g><g data-f2c-idx=\"934\"><path d=\"M 632,302.609375 C 632,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"var(--token-2e8179f9-642e-40f6-a729-9879c38a7c7c, rgba(0, 0, 0, 0.4))\" stroke-width=\"2\" stroke-opacity=\"0.2\" stroke-linecap=\"round\" data-f2c-idx=\"935\"></path><path d=\"M 632,302.609375 C 632,180.052578125 328,180.052578125 328,30.26093750000001\" stroke=\"url(#line-:Ruqsmlalp:-4)\" stroke-width=\"2\" stroke-opacity=\"1\" stroke-linecap=\"round\" data-f2c-idx=\"936\"></path><defs data-f2c-idx=\"937\"><linearGradient id=\"line-:Ruqsmlalp:-4\" gradientUnits=\"userSpaceOnUse\" x1=\"0%\" x2=\"0%\" y1=\"41.95%\" y2=\"19.95%\" will-change=\"auto\" data-f2c-idx=\"938\"><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" stop-opacity=\"0\" data-f2c-idx=\"939\"></stop><stop stop-color=\"var(--token-b48b7134-7ad2-4f07-b792-c7a8003d791a, rgb(1, 43, 255))\" data-f2c-idx=\"940\"></stop><stop offset=\"32.5%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" data-f2c-idx=\"941\"></stop><stop offset=\"100%\" stop-color=\"var(--token-52d49a3a-3ad9-4835-a3cb-87d0d1f6fc06, rgba(1, 43, 255, 0.2))\" stop-opacity=\"0\" data-f2c-idx=\"942\"></stop></linearGradient></defs></g></svg>"} />
                                  <div className={styles["div-182"]}>
                                    <span className={styles["span-79"]}>{slots[114] ?? "Research"}</span>
                                  </div>
                                  <div className={styles["div-183"]}>
                                    <span className={styles["span-80"]}>{slots[115] ?? "Analysis"}</span>
                                  </div>
                                  <div className={styles["div-184"]}>
                                    <span className={styles["span-81"]}>{slots[116] ?? "Writing"}</span>
                                  </div>
                                  <div className={styles["div-185"]}>
                                    <span className={styles["span-82"]}>{slots[117] ?? "Documenting"}</span>
                                  </div>
                                  <div className={styles["div-186"]}>
                                    <span className={styles["span-83"]}>{slots[118] ?? "Storing"}</span>
                                  </div>
                                  <div className={styles["div-187"]}>
                                    <img className={styles["img-14"]} src={slots[119] ?? "https://framerusercontent.com/images/zXeV3rNdqpRtATyUuajWNzXy7jg.svg?width=109&height=155"} alt="" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles["heading-description-9"]}>
                            <div className={styles["div-177"]}>
                              <h5 className={styles["h5-6"]}>{slots[120] ?? "Parallel execution"}</h5>
                            </div>
                            <div className={styles["div-178"]}>
                              <p className={styles["p-82"]}>{slots[121] ?? "Run multiple workstreams and combine their results."}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["capability-card-container"]}>
                        <div className={styles["capability-card"]}>
                          <div className={styles["div-116"]}>
                            <div className={styles["div-188"]}>
                              <CapabilityCard slots={["S","u","m","m","a","r","i","s","i","n","g","s","p","r","e","a","d","s","h","e","e","t","S","e","l","e","c","t","i","n","g","m","o","d","e","l","https://framerusercontent.com/images/8KaKKxU7M28Rzb4GcWcA3KaCnQ4.png?width=100&height=100","Chatgpt","https://framerusercontent.com/images/D78PPxXxhqJnQlCBn2cmf5ueuQ.png?width=100&height=100","Claude"]} />
                            </div>
                          </div>
                          <div className={styles["heading-description-10"]}>
                            <div className={styles["div-174"]}>
                              <h5 className={styles["h5-5"]}>{slots[122] ?? "Model routing"}</h5>
                            </div>
                            <div className={styles["div-189"]}>
                              <p className={styles["p-83"]}>{slots[123] ?? "Select the best model for each task."}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["metrics"]}>
                <div className={styles["content-container-6"]}>
                  <div className={styles["content-7"]}>
                    <div className={styles["heading-tag-5"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-190"]}>
                          <div className={styles["active-4"]}>
                            <Activity slots={[]} />
                            <div className={styles["div-191"]}>
                              <p className={styles["p-84"]}>{slots[124] ?? "Metrics"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["heading-description-11"]}>
                        <div className={styles["div-132"]}>
                          <h2 className={styles["h2-3"]}>{slots[125] ?? "What teams achieve with Singularity"}</h2>
                        </div>
                        <div className={styles["div-172"]}>
                          <p className={styles["p-85"]}>{slots[126] ?? "Advanced intelligence for understanding information, reasoning through problems, and producing reliable outcomes."}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["metric-card-container"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-192"]}>
                          <MetricsCard slots={["3.2×","workflow throughput"]} />
                        </div>
                      </div>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-192"]}>
                          <MetricsCard slots={["68%","Faster resolution"]} />
                        </div>
                      </div>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-192"]}>
                          <MetricsCard slots={["42%","less manual work"]} />
                        </div>
                      </div>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-192"]}>
                          <MetricsCard slots={["99.2%","Task accuracy"]} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles["div-193"]}>
                    <div className={styles["div-194"]}>
                      <SvgGraphic className={styles["svg-11"]} html={"<svg viewBox=\"0 0 320 120\" width=\"100%\" height=\"100%\" preserveAspectRatio=\"none\" data-f2c-idx=\"1092\"><defs data-f2c-idx=\"1093\"><clipPath id=\"growth-R6sqlalp\" data-f2c-idx=\"1094\"><path d=\"M0 102 C64 102 124 96.9 178 77.52 C236 55.08 278 27.540000000000006 320 0 L320 120 L0 120 Z\" data-f2c-idx=\"1095\"></path></clipPath><linearGradient id=\"growth-R6sqlalp-fill\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\" data-f2c-idx=\"1096\"><stop offset=\"0\" stop-color=\"var(--token-621d9ebc-4113-4c98-9cca-bbc178460970, rgba(9, 174, 255, 0.2))\" stop-opacity=\"0.18\" data-f2c-idx=\"1097\"></stop><stop offset=\"1\" stop-color=\"var(--token-621d9ebc-4113-4c98-9cca-bbc178460970, rgba(9, 174, 255, 0.2))\" stop-opacity=\"0.7\" data-f2c-idx=\"1098\"></stop></linearGradient><linearGradient id=\"growth-R6sqlalp-line\" x1=\"0\" y1=\"1\" x2=\"1\" y2=\"0\" data-f2c-idx=\"1099\"><stop offset=\"0\" stop-color=\"var(--token-621d9ebc-4113-4c98-9cca-bbc178460970, rgba(9, 174, 255, 0.2))\" data-f2c-idx=\"1100\"></stop><stop offset=\"1\" stop-color=\"var(--token-fd2642e7-ea40-4298-8994-88ab422747df, rgb(9, 153, 224))\" data-f2c-idx=\"1101\"></stop></linearGradient></defs><path d=\"M0 102 C64 102 124 96.9 178 77.52 C236 55.08 278 27.540000000000006 320 0 L320 120 L0 120 Z\" fill=\"url(#growth-R6sqlalp-fill)\" style=\"opacity: 0;\" will-change=\"transform\" data-f2c-idx=\"1102\"></path><g clip-path=\"url(#growth-R6sqlalp)\" style=\"opacity: 0;\" will-change=\"transform\" data-f2c-idx=\"1103\"><line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1104\"></line><line x1=\"3.2\" y1=\"0\" x2=\"3.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1105\"></line><line x1=\"6.4\" y1=\"0\" x2=\"6.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1106\"></line><line x1=\"9.600000000000001\" y1=\"0\" x2=\"9.600000000000001\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1107\"></line><line x1=\"12.8\" y1=\"0\" x2=\"12.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1108\"></line><line x1=\"16\" y1=\"0\" x2=\"16\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1109\"></line><line x1=\"19.200000000000003\" y1=\"0\" x2=\"19.200000000000003\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1110\"></line><line x1=\"22.400000000000002\" y1=\"0\" x2=\"22.400000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1111\"></line><line x1=\"25.6\" y1=\"0\" x2=\"25.6\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1112\"></line><line x1=\"28.8\" y1=\"0\" x2=\"28.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1113\"></line><line x1=\"32\" y1=\"0\" x2=\"32\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1114\"></line><line x1=\"35.2\" y1=\"0\" x2=\"35.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1115\"></line><line x1=\"38.400000000000006\" y1=\"0\" x2=\"38.400000000000006\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1116\"></line><line x1=\"41.6\" y1=\"0\" x2=\"41.6\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1117\"></line><line x1=\"44.800000000000004\" y1=\"0\" x2=\"44.800000000000004\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1118\"></line><line x1=\"48\" y1=\"0\" x2=\"48\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1119\"></line><line x1=\"51.2\" y1=\"0\" x2=\"51.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1120\"></line><line x1=\"54.400000000000006\" y1=\"0\" x2=\"54.400000000000006\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1121\"></line><line x1=\"57.6\" y1=\"0\" x2=\"57.6\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1122\"></line><line x1=\"60.800000000000004\" y1=\"0\" x2=\"60.800000000000004\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1123\"></line><line x1=\"64\" y1=\"0\" x2=\"64\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1124\"></line><line x1=\"67.2\" y1=\"0\" x2=\"67.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1125\"></line><line x1=\"70.4\" y1=\"0\" x2=\"70.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1126\"></line><line x1=\"73.60000000000001\" y1=\"0\" x2=\"73.60000000000001\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1127\"></line><line x1=\"76.80000000000001\" y1=\"0\" x2=\"76.80000000000001\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1128\"></line><line x1=\"80\" y1=\"0\" x2=\"80\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1129\"></line><line x1=\"83.2\" y1=\"0\" x2=\"83.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1130\"></line><line x1=\"86.4\" y1=\"0\" x2=\"86.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1131\"></line><line x1=\"89.60000000000001\" y1=\"0\" x2=\"89.60000000000001\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1132\"></line><line x1=\"92.80000000000001\" y1=\"0\" x2=\"92.80000000000001\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1133\"></line><line x1=\"96\" y1=\"0\" x2=\"96\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1134\"></line><line x1=\"99.2\" y1=\"0\" x2=\"99.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1135\"></line><line x1=\"102.4\" y1=\"0\" x2=\"102.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1136\"></line><line x1=\"105.60000000000001\" y1=\"0\" x2=\"105.60000000000001\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1137\"></line><line x1=\"108.80000000000001\" y1=\"0\" x2=\"108.80000000000001\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1138\"></line><line x1=\"112\" y1=\"0\" x2=\"112\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1139\"></line><line x1=\"115.2\" y1=\"0\" x2=\"115.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1140\"></line><line x1=\"118.4\" y1=\"0\" x2=\"118.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1141\"></line><line x1=\"121.60000000000001\" y1=\"0\" x2=\"121.60000000000001\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1142\"></line><line x1=\"124.80000000000001\" y1=\"0\" x2=\"124.80000000000001\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1143\"></line><line x1=\"128\" y1=\"0\" x2=\"128\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1144\"></line><line x1=\"131.20000000000002\" y1=\"0\" x2=\"131.20000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1145\"></line><line x1=\"134.4\" y1=\"0\" x2=\"134.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1146\"></line><line x1=\"137.6\" y1=\"0\" x2=\"137.6\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1147\"></line><line x1=\"140.8\" y1=\"0\" x2=\"140.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1148\"></line><line x1=\"144\" y1=\"0\" x2=\"144\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1149\"></line><line x1=\"147.20000000000002\" y1=\"0\" x2=\"147.20000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1150\"></line><line x1=\"150.4\" y1=\"0\" x2=\"150.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1151\"></line><line x1=\"153.60000000000002\" y1=\"0\" x2=\"153.60000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1152\"></line><line x1=\"156.8\" y1=\"0\" x2=\"156.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1153\"></line><line x1=\"160\" y1=\"0\" x2=\"160\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1154\"></line><line x1=\"163.20000000000002\" y1=\"0\" x2=\"163.20000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1155\"></line><line x1=\"166.4\" y1=\"0\" x2=\"166.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1156\"></line><line x1=\"169.60000000000002\" y1=\"0\" x2=\"169.60000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1157\"></line><line x1=\"172.8\" y1=\"0\" x2=\"172.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1158\"></line><line x1=\"176\" y1=\"0\" x2=\"176\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1159\"></line><line x1=\"179.20000000000002\" y1=\"0\" x2=\"179.20000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1160\"></line><line x1=\"182.4\" y1=\"0\" x2=\"182.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1161\"></line><line x1=\"185.60000000000002\" y1=\"0\" x2=\"185.60000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1162\"></line><line x1=\"188.8\" y1=\"0\" x2=\"188.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1163\"></line><line x1=\"192\" y1=\"0\" x2=\"192\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1164\"></line><line x1=\"195.20000000000002\" y1=\"0\" x2=\"195.20000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1165\"></line><line x1=\"198.4\" y1=\"0\" x2=\"198.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1166\"></line><line x1=\"201.60000000000002\" y1=\"0\" x2=\"201.60000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1167\"></line><line x1=\"204.8\" y1=\"0\" x2=\"204.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1168\"></line><line x1=\"208\" y1=\"0\" x2=\"208\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1169\"></line><line x1=\"211.20000000000002\" y1=\"0\" x2=\"211.20000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1170\"></line><line x1=\"214.4\" y1=\"0\" x2=\"214.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1171\"></line><line x1=\"217.60000000000002\" y1=\"0\" x2=\"217.60000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1172\"></line><line x1=\"220.8\" y1=\"0\" x2=\"220.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1173\"></line><line x1=\"224\" y1=\"0\" x2=\"224\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1174\"></line><line x1=\"227.20000000000002\" y1=\"0\" x2=\"227.20000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1175\"></line><line x1=\"230.4\" y1=\"0\" x2=\"230.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1176\"></line><line x1=\"233.60000000000002\" y1=\"0\" x2=\"233.60000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1177\"></line><line x1=\"236.8\" y1=\"0\" x2=\"236.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1178\"></line><line x1=\"240\" y1=\"0\" x2=\"240\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1179\"></line><line x1=\"243.20000000000002\" y1=\"0\" x2=\"243.20000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1180\"></line><line x1=\"246.4\" y1=\"0\" x2=\"246.4\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1181\"></line><line x1=\"249.60000000000002\" y1=\"0\" x2=\"249.60000000000002\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1182\"></line><line x1=\"252.8\" y1=\"0\" x2=\"252.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1183\"></line><line x1=\"256\" y1=\"0\" x2=\"256\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1184\"></line><line x1=\"259.2\" y1=\"0\" x2=\"259.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1185\"></line><line x1=\"262.40000000000003\" y1=\"0\" x2=\"262.40000000000003\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1186\"></line><line x1=\"265.6\" y1=\"0\" x2=\"265.6\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1187\"></line><line x1=\"268.8\" y1=\"0\" x2=\"268.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1188\"></line><line x1=\"272\" y1=\"0\" x2=\"272\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1189\"></line><line x1=\"275.2\" y1=\"0\" x2=\"275.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1190\"></line><line x1=\"278.40000000000003\" y1=\"0\" x2=\"278.40000000000003\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1191\"></line><line x1=\"281.6\" y1=\"0\" x2=\"281.6\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1192\"></line><line x1=\"284.8\" y1=\"0\" x2=\"284.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1193\"></line><line x1=\"288\" y1=\"0\" x2=\"288\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1194\"></line><line x1=\"291.2\" y1=\"0\" x2=\"291.2\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1195\"></line><line x1=\"294.40000000000003\" y1=\"0\" x2=\"294.40000000000003\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1196\"></line><line x1=\"297.6\" y1=\"0\" x2=\"297.6\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1197\"></line><line x1=\"300.8\" y1=\"0\" x2=\"300.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1198\"></line><line x1=\"304\" y1=\"0\" x2=\"304\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1199\"></line><line x1=\"307.20000000000005\" y1=\"0\" x2=\"307.20000000000005\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1200\"></line><line x1=\"310.40000000000003\" y1=\"0\" x2=\"310.40000000000003\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1201\"></line><line x1=\"313.6\" y1=\"0\" x2=\"313.6\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1202\"></line><line x1=\"316.8\" y1=\"0\" x2=\"316.8\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1203\"></line><line x1=\"320\" y1=\"0\" x2=\"320\" y2=\"120\" stroke=\"var(--token-8144f193-de43-475d-87ea-e22ad062944c, rgba(0, 0, 0, 0.1))\" stroke-width=\"0.24\" data-f2c-idx=\"1204\"></line></g><path d=\"M0 102 C64 102 124 96.9 178 77.52 C236 55.08 278 27.540000000000006 320 0\" fill=\"none\" stroke=\"url(#growth-R6sqlalp-line)\" stroke-width=\"0.72\" stroke-linecap=\"round\" pathLength=\"1\" stroke-dashoffset=\"0\" stroke-dasharray=\"0 1\" will-change=\"auto\" data-f2c-idx=\"1205\"></path></svg>"} />
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["industries"]}>
                <div className={styles["content-container-7"]}>
                  <div className={styles["content-8"]}>
                    <div className={styles["heading-tag-2"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-195"]}>
                          <div className={styles["active-5"]}>
                            <div className={styles["div-97"]} />
                            <div className={styles["div-196"]}>
                              <p className={styles["p-86"]}>{slots[127] ?? "Industries"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["heading-description-3"]}>
                        <div className={styles["div-132"]}>
                          <h2 className={styles["h2-4"]}>
                            <span className={styles["span-84"]}>{slots[128] ?? "Solutions for every industry"}</span>
                          </h2>
                        </div>
                        <div className={styles["div-104"]}>
                          <div className={styles["p-87"]}>
                            <span className={styles["span-85"]}>{slots[129] ?? "Purpose-built workflows for complex, high-stakes operations."}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-197"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-198"]}>
                          <IndustryCard slots={["Administration","Streamline departmental workflows, manage records, and improve public service delivery."]} />
                        </div>
                      </div>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-198"]}>
                          <IndustryCard slots={["Defence","Optimize military logistics, manage resources, and support operational planning."]} />
                        </div>
                      </div>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-199"]}>
                          <IndustryCard slots={["Law Enforcement","Manage case records, analyze intelligence, and coordinate investigations."]} />
                        </div>
                      </div>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-200"]}>
                          <IndustryCard2 slots={["Finance","Streamline financial operations, monitor transactions, and support regulatory compliance."]} />
                        </div>
                      </div>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-198"]}>
                          <IndustryCard slots={["Healthcare","Manage patient records, coordinate hospital operations, and support care teams."]} />
                        </div>
                      </div>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-199"]}>
                          <IndustryCard slots={["Infrastructure","Monitor public assets, manage projects, and streamline maintenance operations."]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["pricing"]}>
                <div className={styles["content-container-8"]}>
                  <div className={styles["content-9"]}>
                    <div className={styles["heading-tag-6"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-201"]}>
                          <div className={styles["active-6"]}>
                            <Code slots={[]} />
                            <div className={styles["div-202"]}>
                              <p className={styles["p-88"]}>{slots[130] ?? "Implementation"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["heading-description-12"]}>
                        <div className={styles["div-203"]}>
                          <h2 className={styles["h2-5"]}>{slots[131] ?? "Implementation plans"}</h2>
                        </div>
                        <div className={styles["div-104"]}>
                          <p className={styles["p-66"]}>{slots[132] ?? "Choose a focused pilot, scale proven capabilities, or transform how your organization operates."}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-116"]}>
                      <div className={styles["div-204"]}>
                        <PricingToggleCards slots={["Standard","Express","Pilot","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2 weeks / project","Test on a smaller scale before committing to full deployment.","INCLUDES","Build prototype","Integrate data","Test workflows","Measure performance","Validate results","Get started","Scale","Most popular","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","2 months / project","Scale tested capabilities across the entire organization.","INCLUDES","Data analytics","Configure servers","AI agents","Legacy systems","Train teams","Start with team","Transform","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","4 months / project","Move towards intelligent systems capable of operating independently.","INCLUDES","Automate processes","Predict outcomes","Decision intelligence","Reduce costs","Simulate scenarios","Talk to sales"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["security"]}>
                <div className={styles["content-container-9"]}>
                  <div className={styles["content-10"]}>
                    <div className={styles["heading-tag-7"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-205"]}>
                          <div className={styles["active-7"]}>
                            <Shield slots={[]} />
                            <div className={styles["permission-label"]}>
                              <p className={styles["p-89"]}>{slots[133] ?? "Security"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["heading-description-13"]}>
                        <div className={styles["div-206"]}>
                          <h2 className={styles["h2-6"]}>
                            <span className={styles["span-84"]}>{slots[134] ?? "Security"}</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-116"]}>
                      <div className={styles["image-2"]}>
                        <div className={styles["div-207"]}>
                          <img className={styles["img-15"]} src={slots[135] ?? "https://framerusercontent.com/images/u9bTOPLvp26Qvtp49kVrXhzKog.png?scale-down-to=1024&width=4224&height=2376"} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className={styles["security-info-container"]}>
                      <div className={styles["security-card"]}>
                        <div className={styles["div-208"]}>
                          <h6 className={styles["h6-9"]}>{slots[136] ?? "SOC 2 Type II"}</h6>
                        </div>
                        <div className={styles["div-209"]}>
                          <p className={styles["p-90"]}>{slots[137] ?? "Security controls independently assessed over an extended period."}</p>
                        </div>
                      </div>
                      <div className={styles["security-card"]}>
                        <div className={styles["div-208"]}>
                          <h6 className={styles["h6-9"]}>{slots[138] ?? "ISO 27001"}</h6>
                        </div>
                        <div className={styles["div-209"]}>
                          <p className={styles["p-90"]}>{slots[139] ?? "International standard for managing information security systems."}</p>
                        </div>
                      </div>
                      <div className={styles["security-card"]}>
                        <div className={styles["div-208"]}>
                          <h6 className={styles["h6-9"]}>{slots[140] ?? "GDPR"}</h6>
                        </div>
                        <div className={styles["div-209"]}>
                          <p className={styles["p-90"]}>{slots[141] ?? "Protects personal data and privacy rights across Europe."}</p>
                        </div>
                      </div>
                      <div className={styles["security-card"]}>
                        <div className={styles["div-208"]}>
                          <h6 className={styles["h6-9"]}>
                            <span className={styles["span-86"]}>{slots[142] ?? "DPDP"}</span>
                          </h6>
                        </div>
                        <div className={styles["div-209"]}>
                          <div className={styles["p-91"]}>
                            <span className={styles["span-87"]}>{slots[143] ?? "Gives Indian citizens"}</span>
                            <br className={styles["br"]} />
                            <span className={styles["span-87"]}>{slots[144] ?? "control over their"}</span>
                            <br className={styles["br"]} />
                            <span className={styles["span-87"]}>{slots[145] ?? "personal data"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles["testimonial"]}>
                <div className={styles["content-container-10"]}>
                  <div className={styles["content-11"]}>
                    <div className={styles["heading-tag-2"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-210"]}>
                          <div className={styles["active-8"]}>
                            <Award slots={[]} />
                            <div className={styles["div-211"]}>
                              <p className={styles["p-92"]}>{slots[146] ?? "Testimonials"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["heading-description-3"]}>
                        <div className={styles["div-132"]}>
                          <h2 className={styles["h2-2"]}>{slots[147] ?? "Trusted by teams in motion."}</h2>
                        </div>
                        <div className={styles["div-104"]}>
                          <p className={styles["p-66"]}>{slots[148] ?? "Singularity turns complex operations into clearer priorities and faster decisions."}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles["div-212"]}>
                  <div className={styles["div-116"]}>
                    <States
                      a={<>
                        <section className={styles["section-2"]}>
                          <div className={styles["div-213"]}>
                            <article className={styles["article"] + " " + styles["rv-6"]} data-reveal>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-16"]} src="https://i.pravatar.cc/160?img=47" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“Singularity gives our team one clear place to turn scattered customer signals into action.”"}</blockquote>
                              </div>
                              <p className={styles["p-93"]}>{"— Maya Chen, Chief Operating Officer at Northstar"}</p>
                            </article>
                            <article className={styles["article-2"] + " " + styles["rv-7"]} data-reveal>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-16"]} src="https://i.pravatar.cc/160?img=12" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“We spend less time collecting updates and more time making the decisions that move work forward.”"}</blockquote>
                              </div>
                              <p className={styles["p-94"]}>{"— Daniel Ross, Head of Product at Frame"}</p>
                            </article>
                            <article className={styles["article-3"] + " " + styles["rv-8"]} data-reveal>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-16"]} src="https://i.pravatar.cc/160?img=32" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“It feels less like another tool and more like a dependable operator embedded in the team.”"}</blockquote>
                              </div>
                              <p className={styles["p-94"]}>{"— Lina Ortiz, VP, Customer Experience at Relay"}</p>
                            </article>
                            <article className={styles["article-4"] + " " + styles["rv-9"]} data-reveal>
                              <div className={styles["div-216"]}>
                                <div className={styles["div-217"]}>
                                  <img className={styles["img-17"]} src="https://i.pravatar.cc/160?img=11" alt="" />
                                  <div className={styles["span-89"]} />
                                </div>
                                <blockquote className={styles["blockquote-2"]}>{"“Singularity helped us coordinate launches without adding another layer of meetings or reporting.”"}</blockquote>
                              </div>
                              <p className={styles["p-95"]}>{"— Jordan Blake, Chief Technology Officer at Meridian"}</p>
                            </article>
                            <article className={styles["article-5"] + " " + styles["rv-10"]} data-reveal>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-16"]} src="https://i.pravatar.cc/160?img=44" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“The system is calm, precise, and flexible enough to support how our people already work.”"}</blockquote>
                              </div>
                              <p className={styles["p-93"]}>{"— Priya Shah, Director of Operations at Common Thread"}</p>
                            </article>
                            <article className={styles["article-6"] + " " + styles["rv-11"]} data-reveal>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-16"]} src="https://i.pravatar.cc/160?img=15" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“We launched in days, saw adoption immediately, and finally have an operating rhythm that scales.”"}</blockquote>
                              </div>
                              <p className={styles["p-94"]}>{"— Eli Morgan, Founder at Current"}</p>
                            </article>
                            <article className={styles["article-7"]}>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-16"]} src="https://i.pravatar.cc/160?img=49" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“Our information is easier to find, our handoffs are cleaner, and nothing important gets buried.”"}</blockquote>
                              </div>
                              <p className={styles["p-94"]}>{"— Amara Lewis, Program Lead at Tandem"}</p>
                            </article>
                          </div>
                          <div className={styles["div-218"]}>
                            <button className={styles["button"]}>
                              <img className={styles["img-18"]} src="https://framerusercontent.com/images/q4tvq9v1Jwu5IR2f2OcwIK3Tdw.png?width=96&height=96" alt="" />
                            </button>
                            <button className={styles["button"]}>
                              <img className={styles["img-18"]} src="https://framerusercontent.com/images/SuVzHcAIqwwM2vGyCxCIrEKMc.png?width=96&height=96" alt="" />
                            </button>
                          </div>
                        </section>
                      </>}
                      b={<>
                        <section className={styles["section-2"]}>
                          <div className={styles["div-219"]}>
                            <article className={styles["article-8"]}>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-19"]} src="https://i.pravatar.cc/160?img=15" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“We launched in days, saw adoption immediately, and finally have an operating rhythm that scales.”"}</blockquote>
                              </div>
                              <p className={styles["p-94"]}>{"— Eli Morgan, Founder at Current"}</p>
                            </article>
                            <article className={styles["article-9"]}>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-19"]} src="https://i.pravatar.cc/160?img=49" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“Our information is easier to find, our handoffs are cleaner, and nothing important gets buried.”"}</blockquote>
                              </div>
                              <p className={styles["p-94"]}>{"— Amara Lewis, Program Lead at Tandem"}</p>
                            </article>
                            <article className={styles["article-10"]}>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-19"]} src="https://i.pravatar.cc/160?img=47" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“Singularity gives our team one clear place to turn scattered customer signals into action.”"}</blockquote>
                              </div>
                              <p className={styles["p-93"]}>{"— Maya Chen, Chief Operating Officer at Northstar"}</p>
                            </article>
                            <article className={styles["article-11"]}>
                              <div className={styles["div-216"]}>
                                <div className={styles["div-217"]}>
                                  <img className={styles["img-20"]} src="https://i.pravatar.cc/160?img=12" alt="" />
                                  <div className={styles["span-89"]} />
                                </div>
                                <blockquote className={styles["blockquote-2"]}>{"“We spend less time collecting updates and more time making the decisions that move work forward.”"}</blockquote>
                              </div>
                              <p className={styles["p-96"]}>{"— Daniel Ross, Head of Product at Frame"}</p>
                            </article>
                            <article className={styles["article-12"]}>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-19"]} src="https://i.pravatar.cc/160?img=32" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“It feels less like another tool and more like a dependable operator embedded in the team.”"}</blockquote>
                              </div>
                              <p className={styles["p-94"]}>{"— Lina Ortiz, VP, Customer Experience at Relay"}</p>
                            </article>
                            <article className={styles["article-13"]}>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-19"]} src="https://i.pravatar.cc/160?img=11" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“Singularity helped us coordinate launches without adding another layer of meetings or reporting.”"}</blockquote>
                              </div>
                              <p className={styles["p-93"]}>{"— Jordan Blake, Chief Technology Officer at Meridian"}</p>
                            </article>
                            <article className={styles["article-14"]}>
                              <div className={styles["div-214"]}>
                                <div className={styles["div-215"]}>
                                  <img className={styles["img-19"]} src="https://i.pravatar.cc/160?img=44" alt="" />
                                  <div className={styles["span-88"]} />
                                </div>
                                <blockquote className={styles["blockquote"]}>{"“The system is calm, precise, and flexible enough to support how our people already work.”"}</blockquote>
                              </div>
                              <p className={styles["p-93"]}>{"— Priya Shah, Director of Operations at Common Thread"}</p>
                            </article>
                          </div>
                          <div className={styles["div-218"]}>
                            <button className={styles["button-2"]}>
                              <img className={styles["img-21"]} src="https://framerusercontent.com/images/q4tvq9v1Jwu5IR2f2OcwIK3Tdw.png?width=96&height=96" alt="" />
                            </button>
                            <button className={styles["button"]}>
                              <img className={styles["img-21"]} src="https://framerusercontent.com/images/SuVzHcAIqwwM2vGyCxCIrEKMc.png?width=96&height=96" alt="" />
                            </button>
                          </div>
                        </section>
                      </>}
                    />
                  </div>
                </div>
              </section>
              <section className={styles["faqs"]}>
                <div className={styles["content-container-11"]}>
                  <div className={styles["content-12"]}>
                    <div className={styles["heading-tag-2"]}>
                      <div className={styles["div-116"]}>
                        <div className={styles["div-220"]}>
                          <div className={styles["active-9"]}>
                            <AlertTriangle slots={[]} />
                            <div className={styles["div-221"]}>
                              <p className={styles["p-97"]}>{slots[149] ?? "FAQs"}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles["heading-description-3"]}>
                        <div className={styles["div-132"]}>
                          <h2 className={styles["h2-2"]}>{slots[150] ?? "Questions about Singularity, answered."}</h2>
                        </div>
                        <div className={styles["div-104"]}>
                          <p className={styles["p-66"]}>{slots[151] ?? "Learn how Singularity connects your tools, protects data, and supports your rollout."}</p>
                        </div>
                      </div>
                    </div>
                    <div className={styles["div-116"]}>
                      <div className={styles["div-222"]}>
                        <FAQsCardContainer slots={["How quickly can we get started?","Most teams can begin with one focused workflow, then expand as their needs grow.","What tools can Singularity connect to?","Can we start with one workflow?","Does Singularity replace our existing tools?","Can we control what Singularity can access?","How is our company data protected?","Can workflows be customized for our team?","What support is included during rollout?"]} />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
          <div className={styles["div-223"]} />
          <div className={styles["div-224"]} />
          <div className={styles["div-225"]}>
            <div className={styles["div-116"]}>
              <Footer slots={["You’ve seen how Singularity works. Now put it to work.","Start with one goal, connect the right context, and see what your team can move forward.","Get started","https://framerusercontent.com/images/8DoDhZvvH61MRvHyhTOuij0SAXI.svg?width=109&height=155","Singularity","A smarter way to get things done.","Product","How it works","Features","Capabilities","Implementation","Security","© 2026 Singularity. All rights reserved."]} />
            </div>
          </div>
          <div className={styles["lenis"]} />
        </div>
        <Template2 slots={[]} />
      </div>
      <div className={styles["div-226"]}>
        <a className={styles["light"]} href="https://www.framer.com">
          <div className={styles["backdrop"]} />
          <div className={styles["content-13"]}>
            <div className={styles["div-227"]}>
              <Framer slots={[]} />
            </div>
            <p className={styles["p-98"]}>{slots[0] ?? "Create a free website with Framer, the website builder loved by startups, designers and agencies."}</p>
            <Text slots={[]} />
          </div>
          <div className={styles["bottom"]} />
          <div className={styles["border"]} />
        </a>
      </div>
      <div className={styles["div-228"]}>
        <SvgGraphic className={styles["svg-12"]} html={"<svg width=\"26\" height=\"26\" viewBox=\"0 0 26 26\" fill=\"none\" id=\"svg-904218853_1448\" data-f2c-idx=\"3479\">\n<g filter=\"url(#svg-904218853_1448_filter0_d_4_35)\" data-f2c-idx=\"3480\">\n<path d=\"M11.8924 23.7113L7.33378 7.71982C7.0984 6.89409 7.95602 6.18106 8.73584 6.55413L23.8385 13.7792C24.6416 14.1634 24.5812 15.3159 23.7425 15.6131L17.5312 17.8139C17.3056 17.8938 17.1164 18.0511 16.9978 18.2574L13.7318 23.9361C13.2908 24.7029 12.1347 24.5616 11.8924 23.7113Z\" fill=\"#1570EF\" data-f2c-idx=\"3481\"></path>\n<path d=\"M6.85075 7.8544C6.49768 6.61583 7.78362 5.54674 8.95335 6.10628L24.0564 13.3314C25.2607 13.9078 25.1699 15.6359 23.9119 16.0816L17.7012 18.2825C17.5885 18.3224 17.4939 18.4012 17.4346 18.5041L14.1679 24.1829C13.5065 25.3329 11.7731 25.1214 11.4093 23.8463L6.85075 7.8544Z\" stroke=\"#1570EF\" data-f2c-idx=\"3482\"></path>\n</g>\n<defs data-f2c-idx=\"3483\">\n<filter id=\"svg-904218853_1448_filter0_d_4_35\" x=\"4.28796\" y=\"4.45428\" width=\"23.1241\" height=\"23.9793\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\" data-f2c-idx=\"3484\">\n<feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" data-f2c-idx=\"3485\"></feFlood>\n<feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\" data-f2c-idx=\"3486\"></feColorMatrix>\n<feOffset dy=\"1\" data-f2c-idx=\"3487\"></feOffset>\n<feGaussianBlur stdDeviation=\"1\" data-f2c-idx=\"3488\"></feGaussianBlur>\n<feComposite in2=\"hardAlpha\" operator=\"out\" data-f2c-idx=\"3489\"></feComposite>\n<feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0\" data-f2c-idx=\"3490\"></feColorMatrix>\n<feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_4_35\" data-f2c-idx=\"3491\"></feBlend>\n<feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_4_35\" result=\"shape\" data-f2c-idx=\"3492\"></feBlend>\n</filter>\n</defs>\n</svg>"} />
        <SvgGraphic className={styles["svg-13"]} html={"<svg id=\"3467097230\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"3493\"><path d=\"M 0 0 L 16 0\" fill=\"transparent\" height=\"1px\" id=\"YnobPTYMb\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(4 5)\" width=\"16px\" data-f2c-idx=\"3494\"></path><path d=\"M 0 0 L 16 0\" fill=\"transparent\" height=\"1px\" id=\"Cb0Gao21R\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(4 12)\" width=\"16px\" data-f2c-idx=\"3495\"></path><path d=\"M 0 0 L 16 0\" fill=\"transparent\" height=\"1px\" id=\"oPtuyu4df\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(4 19)\" width=\"16px\" data-f2c-idx=\"3496\"></path></svg>"} />
        <SvgGraphic className={styles["svg-13"]} html={"<svg id=\"1175957644\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"3497\"><path d=\"M 0 0 L 14 0\" fill=\"transparent\" height=\"1px\" id=\"h3fQSrHEV\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(5 12)\" width=\"14px\" data-f2c-idx=\"3498\"></path><path d=\"M 0 0 L 7 7 L 0 14\" fill=\"transparent\" height=\"14px\" id=\"DAe82Eor1\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(12 5)\" width=\"7px\" data-f2c-idx=\"3499\"></path></svg>"} />
        <SvgGraphic className={styles["svg-13"]} html={"<svg id=\"924565091\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"3500\"><path d=\"M 12.999 2.828 L 4.585 11.414 C 3.804 12.195 3.804 13.462 4.585 14.243 C 5.366 15.024 6.633 15.024 7.414 14.243 L 15.828 5.657 C 17.39 4.095 17.39 1.562 15.828 0 C 14.266 -1.562 11.733 -1.562 10.171 0 L 1.792 8.551 C 0.256 10.063 -0.352 12.282 0.2 14.365 C 0.753 16.449 2.38 18.076 4.463 18.628 C 6.546 19.18 8.766 18.572 10.277 17.036 L 18.656 8.485\" fill=\"transparent\" height=\"18.828192976034472px\" id=\"ty6X7e0Wo\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(3.001 3.172)\" width=\"18.65619297603447px\" data-f2c-idx=\"3501\"></path></svg>"} />
        <SvgGraphic className={styles["svg-13"]} html={"<svg id=\"3473725508\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"3502\"><path d=\"M 0 0 L 0 3\" fill=\"transparent\" height=\"3px\" id=\"lVEeRYep0\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(12 19)\" width=\"1px\" data-f2c-idx=\"3503\"></path><path d=\"M 14 0 L 14 2 C 14 5.866 10.866 9 7 9 C 3.134 9 0 5.866 0 2 L 0 0\" fill=\"transparent\" height=\"9px\" id=\"WbjiU2jBC\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(5 10)\" width=\"14px\" data-f2c-idx=\"3504\"></path><path d=\"M 3 13 C 1.343 13 0 11.657 0 10 L 0 3 C 0 1.343 1.343 0 3 0 L 3 0 C 4.657 0 6 1.343 6 3 L 6 10 C 6 11.657 4.657 13 3 13 Z\" fill=\"transparent\" height=\"13px\" id=\"yJm8ByjbS\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(9 2)\" width=\"6px\" data-f2c-idx=\"3505\"></path></svg>"} />
        <SvgGraphic className={styles["svg-13"]} html={"<svg id=\"1247979269\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"3506\"><path d=\"M 0 7 L 7 0 L 14 7\" fill=\"transparent\" height=\"7px\" id=\"MVR4BRiZr\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(5 5)\" width=\"14px\" data-f2c-idx=\"3507\"></path><path d=\"M 0 14 L 0 0\" fill=\"transparent\" height=\"14px\" id=\"gM_biTBPx\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(12 5)\" width=\"1px\" data-f2c-idx=\"3508\"></path></svg>"} />
        <SvgGraphic className={styles["svg-13"]} html={"<svg id=\"324576014\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"3509\"><path d=\"M 0 9 C 0 4.029 4.029 0 9 0 C 11.516 0.009 13.931 0.991 15.74 2.74 L 18 5\" fill=\"transparent\" height=\"9px\" id=\"klkIIHfWC\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(3 3)\" width=\"18px\" data-f2c-idx=\"3510\"></path><path d=\"M 5 0 L 5 5 L 0 5\" fill=\"transparent\" height=\"5px\" id=\"vXHosJ3qa\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(16 3)\" width=\"5px\" data-f2c-idx=\"3511\"></path><path d=\"M 18 0 C 18 4.971 13.971 9 9 9 C 6.484 8.991 4.069 8.009 2.26 6.26 L 0 4\" fill=\"transparent\" height=\"9px\" id=\"Ppiqd9NCr\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(3 12)\" width=\"18px\" data-f2c-idx=\"3512\"></path><path d=\"M 5 0 L 0 0 L 0 5\" fill=\"transparent\" height=\"5px\" id=\"IGjtM0KZD\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(3 16)\" width=\"5px\" data-f2c-idx=\"3513\"></path></svg>"} />
        <SvgGraphic className={styles["svg-13"]} html={"<svg id=\"3008297960\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"3514\"><path d=\"M 9.019 0.816 C 9.108 0.343 9.521 0 10.002 0 C 10.484 0 10.897 0.343 10.985 0.816 L 12.036 6.374 C 12.189 7.183 12.822 7.816 13.63 7.968 L 19.188 9.019 C 19.662 9.108 20.005 9.521 20.005 10.002 C 20.005 10.484 19.662 10.897 19.188 10.985 L 13.63 12.036 C 12.822 12.189 12.189 12.822 12.036 13.63 L 10.985 19.188 C 10.897 19.662 10.484 20.005 10.002 20.005 C 9.521 20.005 9.108 19.662 9.019 19.188 L 7.968 13.63 C 7.816 12.822 7.183 12.189 6.374 12.036 L 0.816 10.985 C 0.343 10.897 0 10.484 0 10.002 C 0 9.521 0.343 9.108 0.816 9.019 L 6.374 7.968 C 7.183 7.816 7.816 7.183 7.968 6.374 Z\" fill=\"transparent\" height=\"20.004788889056996px\" id=\"r3ITwxBG7\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(1.998 1.998)\" width=\"20.004788889056993px\" data-f2c-idx=\"3515\"></path><path d=\"M 0 0 L 0 4\" fill=\"transparent\" height=\"4px\" id=\"npiFUOZYL\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(20 2)\" width=\"1px\" data-f2c-idx=\"3516\"></path><path d=\"M 4 0 L 0 0\" fill=\"transparent\" height=\"1px\" id=\"KnnF_NlKv\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(18 4)\" width=\"4px\" data-f2c-idx=\"3517\"></path><path d=\"M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z\" fill=\"transparent\" height=\"4px\" id=\"aBzgyASOc\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--js9iwy, 2)\" stroke=\"var(--1m973uw, rgb(0,0,0))\" transform=\"translate(2 18)\" width=\"4px\" data-f2c-idx=\"3518\"></path></svg>"} />
        <SvgGraphic className={styles["svg-13"]} html={"<svg id=\"5093950\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"3519\"><path d=\"M 12 12 L 20 20 M 14 7 C 14 10.866 10.866 14 7 14 C 3.134 14 0 10.866 0 7 C 0 3.134 3.134 0 7 0 C 10.866 0 14 3.134 14 7 Z\" fill=\"transparent\" height=\"20px\" id=\"LgkkLgy81\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--1ww558a, 2)\" stroke=\"var(--4rxgx6, black)\" transform=\"translate(2 2)\" width=\"20px\" data-f2c-idx=\"3520\"></path></svg>"} />
        <SvgGraphic className={styles["svg-13"]} html={"<svg id=\"2883338743\" display=\"block\" role=\"presentation\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" data-f2c-idx=\"3521\"><path d=\"M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z\" fill-opacity=\"var(--1m6trwb, 0)\" fill=\"var(--21h8s6, rgb(0, 0, 0))\" height=\"18px\" id=\"M2umBpORv\" transform=\"translate(3 3)\" width=\"18px\" data-f2c-idx=\"3522\"></path><path d=\"M 0 3 L 2.25 5.25 L 7.5 0\" fill=\"transparent\" height=\"5.25px\" id=\"SKKzYtdWd\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--pgex8v, 1.5)\" stroke=\"var(--21h8s6, rgb(0, 0, 0))\" transform=\"translate(8.25 9.75)\" width=\"7.5px\" data-f2c-idx=\"3523\"></path><path d=\"M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z\" fill=\"transparent\" height=\"18px\" id=\"Ub0giwiXO\" stroke-dasharray=\"\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"var(--pgex8v, 1.5)\" stroke=\"var(--21h8s6, rgb(0, 0, 0))\" transform=\"translate(3 3)\" width=\"18px\" data-f2c-idx=\"3524\"></path></svg>"} />
      </div>
    </>
  )
}
