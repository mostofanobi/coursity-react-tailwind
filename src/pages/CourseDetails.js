import React from "react";
import { useHistory, useParams } from "react-router";
import { useGlobalContext } from "../context";

const CourseDetails = () => {
  const { courseName } = useParams();
  const { courses } = useGlobalContext();
  const history = useHistory();
  const selectedCourse = courses.find(({ title }) => title === courseName);
  const {
    title,
    image,
    duration,
    author,
    category,
    author_info,
    author_img,
    course_outline,
  } = selectedCourse;

  return (
    <section className="text-gray-600 body-font pt-12 sm:pt-0 bg-gray-50">
      <div className="max-w-6xl px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-5/6 mx-auto">
          <div className="rounded-lg sm:w-10/12 md:h-80 xl:h-96 xl:w-11/12 sm:h-64 h-52 mx-auto overflow-hidden">
            <img
              alt={title}
              className="object-cover object-center h-full w-full"
              src={image}
            />
          </div>
          <div className="text-center">
            <h1 className="mt-6 font-bold text-4xl mb-3">{title}</h1>
            <p className="badge">{category}</p>
          </div>
          <div className="flex flex-col md:flex-row mt-10">
            <div className="md:w-1/3 text-center md:pr-8 md:py-8">
              <div className="w-20 shadow-sm h-20 rounded-full overflow-hidden inline-flex items-center justify-center">
                <img
                  className="object-cover object-center h-full w-full"
                  src={author_img}
                  alt={author}
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  {author}
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base">{author_info}</p>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8 md:py-8 md:border-l border-gray-200 md:border-t-0 border-t mt-4 pt-4 md:mt-0 text-center md:text-left">
              <div className="leading-relaxed text-lg text-left mb-4">
                <span className="font-bold inline-block mb-2">
                  <span className="badge">{duration}</span> What you will learn:
                </span>
                <ul>
                  {course_outline.map((item, index) => {
                    return (
                      <li key={index} className="mb-2">
                        <svg
                          className="inline mr-3"
                          height="25"
                          viewBox="0 0 512.000000 512.000000"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <g
                            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#6366f1"
                            stroke="none"
                          >
                            <path
                              d="M2370 5114 c-19 -2 -77 -9 -128 -15 -344 -40 -726 -174 -1026 -361
                                -320 -200 -634 -514 -836 -838 -179 -286 -309 -655 -362 -1025 -17 -118 -17
                                -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220
                                412 -357 681 -489 188 -92 309 -137 500 -185 196 -49 343 -70 545 -77 583 -20
                                1142 158 1620 515 132 99 376 338 472 462 252 327 420 692 497 1075 38 188 46
                                277 46 505 0 276 -26 474 -90 686 -21 68 -32 88 -68 121 -107 98 -267 71 -331
                                -58 -32 -65 -32 -94 -2 -211 13 -51 32 -136 41 -188 23 -129 31 -429 15 -572
                                -55 -497 -263 -932 -615 -1283 -297 -298 -664 -498 -1063 -580 -162 -34 -273
                                -45 -444 -45 -571 0 -1097 218 -1503 625 -131 130 -245 276 -332 422 -363 617
                                -392 1374 -78 2018 286 586 831 1013 1465 1149 304 65 647 62 944 -9 214 -51
                                459 -153 640 -268 97 -61 131 -72 206 -65 133 13 219 169 161 293 -23 49 -55
                                80 -146 137 -288 183 -636 310 -1000 364 -96 14 -472 27 -545 18z"
                            />
                            <path
                              d="M4820 4674 c-23 -10 -422 -401 -1147 -1127 l-1113 -1112 -372 371
                                c-316 314 -379 372 -414 382 -63 18 -105 14 -163 -14 -90 -45 -133 -139 -110
                                -239 11 -48 28 -66 473 -514 310 -311 474 -469 501 -482 51 -24 119 -24 170 0
                                28 13 412 391 1247 1227 1276 1279 1228 1227 1228 1314 0 76 -50 154 -121 191
                                -46 23 -129 25 -179 3z"
                            />
                          </g>
                        </svg>
                        <span>{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary self-center mt-12"
          onClick={() => history.push("/courses")}
        >
          Browse all courses
        </button>
      </div>
    </section>
  );
};

export default CourseDetails;
