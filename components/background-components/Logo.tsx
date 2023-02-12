import style from "../../styles/logo.module.css"

type LogoProps ={
    classes: string
}

export default function Logo({classes}:LogoProps) {
  return (
    <div className={classes}>
      <svg
        className={style.svg}
        viewBox="0 0 189 186"
        version="1.1"
        id="svg364"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs361" />
        <g id="layer1">
          <path
            className={style.logo}
            d="m 97.463404,184.88577 c -12.467385,-0.98735 -23.885,-3.60449 -34.779338,-7.97208 -3.697528,-1.48236 -11.10528,-5.19406 -14.657262,-7.34408 C 25.118482,155.70303 10.110059,135.83564 4.0279648,111.32622 0.93176083,98.849252 0.42566886,85.270329 2.6359378,73.977215 5.1097598,61.337577 10.779559,49.266281 19.869504,37.286078 28.628557,25.741986 39.29928,16.646211 51.029073,10.725505 58.650015,6.8787832 65.635811,4.6642852 76.379111,2.6895439 93.288994,-0.41868331 109.99731,0.56338449 123.76128,5.4745282 c 2.04529,0.729774 7.4159,3.164541 7.28004,3.300395 -0.0344,0.03433 -1.11629,-0.384538 -2.4044,-0.930791 C 122.5392,5.2582252 115.28117,3.3961402 107.56423,2.4378176 103.578,1.9427936 91.831504,1.9416443 87.954224,2.4358576 80.935122,3.3306252 74.728096,4.7901592 68.19085,7.0830502 53.940997,12.081145 40.724385,20.373396 31.050397,30.385475 19.269106,42.578472 11.318823,56.502596 8.1286388,70.530592 c -1.364806,6.001364 -1.847224,10.448357 -1.840483,16.965489 0.0092,8.035491 0.843773,14.739429 2.8044608,22.504429 2.9149104,11.544 8.7134624,23.26928 15.9807394,32.31469 15.736463,19.58684 40.749214,32.50233 68.761598,35.50542 3.70473,0.39717 11.909296,0.62902 16.089876,0.45468 12.67673,-0.52865 24.23392,-3.31638 34.41432,-8.30108 19.36672,-9.48269 30.36,-24.5929 34.8205,-47.86068 2.50525,-13.06846 2.74796,-27.917338 0.66756,-40.842868 -1.27417,-7.916221 -2.92539,-14.27663 -5.71595,-22.017717 -2.9551,-8.197519 -8.36886,-18.51868 -11.94141,-22.766027 -0.49229,-0.585259 -1.70476,-1.8983 -2.69436,-2.917861 -1.94667,-2.005575 -1.54889,-1.758149 2.02528,1.259802 9.27754,7.833711 13.60691,13.147299 17.76936,21.808986 6.16147,12.821391 9.29134,28.098399 9.29555,45.372065 0.001,8.04832 -0.60424,14.95863 -1.88393,21.47654 -5.68113,28.93519 -20.60216,46.86755 -46.75559,56.19171 -6.61144,2.3571 -14.07282,3.97771 -22.65334,4.9203 -4.67226,0.51329 -15.0547,0.66386 -19.809416,0.2873 z m 0.78452,-16.00708 c -10.17518,-0.65662 -19.705777,-2.76569 -28.929596,-6.40192 -5.079037,-2.00224 -9.177117,-4.13869 -14.243783,-7.42561 -2.158381,-1.40023 -2.692294,-1.85058 -2.193892,-1.85058 0.249814,0 1.005187,0.40786 6.729101,3.63364 3.418919,1.92674 7.489896,3.80667 11.571852,5.34376 9.718258,3.65952 19.603158,5.53397 35.303894,6.69458 1.98486,0.14665 1.83583,0.15938 -1.86326,0.15869 -2.2114,0 -5.079847,-0.0691 -6.374316,-0.15266 z M 83.308128,143.78251 c -0.610081,-0.63771 0.150574,-0.97438 3.295728,-1.45865 1.010588,-0.15566 3.539508,-0.55499 5.619818,-0.88758 5.45996,-0.87284 15.215466,-2.09342 21.224546,-2.65553 2.85865,-0.26744 6.16149,-0.61818 7.33968,-0.7794 1.17818,-0.16124 2.1733,-0.26206 2.21138,-0.22402 0.038,0.038 -0.70524,0.2203 -1.65182,0.40503 -0.94655,0.18462 -3.26559,0.68955 -5.15339,1.12191 -7.88759,1.80648 -10.28352,2.24849 -19.024866,3.50989 -5.35158,0.77224 -7.73424,1.0283 -10.29698,1.10665 -2.487859,0.076 -3.392603,0.041 -3.564096,-0.1383 z m -16.209822,-4.99018 c -0.418389,-0.41839 -0.413871,-0.55699 0.03127,-0.95977 0.254029,-0.2298 0.994508,-0.3847 2.500692,-0.52276 1.176891,-0.10798 2.360452,-0.23762 2.630142,-0.28827 0.269691,-0.0508 3.447043,-0.35983 7.060782,-0.68707 11.518622,-1.04304 14.119762,-1.36026 30.498668,-3.71946 19.66068,-2.83189 25.55037,-3.52549 38.34397,-4.51555 2.79527,-0.21636 15.11221,-0.64768 15.22663,-0.53326 0.0369,0.0369 -0.8751,0.17652 -2.0266,0.31041 -1.1515,0.13391 -4.17335,0.59347 -6.7152,1.02136 -2.54186,0.42789 -5.37178,0.90403 -6.28868,1.05806 -1.58762,0.26672 -9.5162,1.41215 -20.39784,2.94685 -2.75076,0.38795 -8.79657,1.27827 -13.43508,1.97846 -24.723496,3.73202 -27.276486,4.00485 -38.749788,4.14135 -7.640563,0.0908 -8.377149,0.0713 -8.678877,-0.23027 z m -28.948812,-6.98091 c -4.119601,-0.33662 -7.82299,-1.3151 -10.036689,-2.6518 -1.434325,-0.86609 -2.822645,-2.37007 -3.477435,-3.76712 -0.453206,-0.96696 -0.523768,-1.36477 -0.511953,-2.8867 0.01162,-1.43377 0.108874,-1.99298 0.520478,-2.97839 3.056127,-7.31596 15.472818,-15.99171 29.572214,-20.662608 5.634471,-1.86662 10.906892,-2.76311 16.524151,-2.8097 1.806871,-0.015 3.28521,-0.049 3.285233,-0.0756 2.4e-5,-0.0266 -0.391956,-0.93901 -0.871037,-2.02758 C 71.281495,89.696042 66.734148,81.542831 61.568357,73.178349 55.436456,63.249571 51.829829,56.557494 50.504241,52.649076 c -0.335504,-0.989221 -0.738302,-2.105665 -0.89513,-2.480989 -0.247637,-0.592659 -0.248542,-0.82041 -0.0069,-1.731803 0.825078,-3.111998 3.345625,-9.814371 3.842868,-10.218613 0.620204,-0.50419 1.858828,-0.450052 2.414402,0.105516 0.246826,0.246814 0.8731,1.548646 1.391725,2.89296 3.454177,8.953512 10.187494,25.538958 10.268966,25.294509 0.04077,-0.122122 -0.06486,-1.650641 -0.234826,-3.39667 -0.677724,-6.966198 -0.77342,-8.680743 -0.779211,-13.961914 -0.0047,-4.185155 0.07389,-6.037513 0.329688,-7.785792 0.840113,-5.740465 2.219027,-8.714843 4.666603,-10.066058 1.3551,-0.748092 3.128543,-0.786019 4.481442,-0.09584 1.214996,0.619841 2.694355,2.211041 3.696717,3.976174 1.841363,3.242598 6.143349,13.30303 9.121939,21.332132 3.94316,10.629179 6.00031,17.805685 10.03395,35.004064 0.607202,2.58895 2.017226,8.32584 3.133376,12.748628 1.11618,4.4228 2.22903,9.23296 2.47307,10.68925 0.24403,1.45629 0.45942,2.67149 0.4786,2.70047 0.0186,0.0289 1.83523,-0.16724 4.03563,-0.43632 14.55381,-1.7788 29.93863,-3.32734 48.15711,-4.84712 4.49529,-0.37502 5.59215,-0.40964 7.06079,-0.22283 3.30689,0.4206 5.36718,1.62765 5.36718,3.14448 0,0.60898 -0.15682,0.8698 -1.03398,1.71934 -1.91707,1.85683 -4.16802,2.4096 -12.79338,3.14172 -21.00268,1.78266 -41.71599,3.98019 -60.997336,6.47136 -1.1866,0.15336 -5.68785,0.72646 -10.00278,1.27368 -4.314909,0.54721 -8.816158,1.12057 -10.002777,1.27416 -18.869314,2.44211 -29.537974,3.2118 -36.56248,2.63781 z m 18.616349,-8.23638 c 5.812519,-0.58124 7.638038,-0.80187 30.694781,-3.70948 3.45193,-0.4353 6.60448,-0.84303 7.00566,-0.90605 l 0.7294,-0.11467 -0.32618,-0.52315 c -1.17782,-1.88902 -4.56784,-6.12851 -6.22569,-7.78564 -4.858527,-4.8565 -9.864686,-6.81173 -17.462208,-6.82015 -7.340202,-0.008 -14.159694,1.63578 -22.083707,5.32342 -1.812105,0.84331 -1.895709,0.94418 -2.35605,2.84295 -0.38327,1.58084 -0.0878,5.43888 0.693545,9.0544 0.372962,1.72596 0.683191,3.17267 0.689353,3.21493 0.01854,0.13181 4.642997,-0.17676 8.641096,-0.57663 z m 34.784501,-21.81029 c -0.15868,-0.67421 -0.58576,-2.505608 -0.94913,-4.069758 -3.0643,-13.190726 -6.136998,-23.78456 -12.182746,-42.002663 -3.608134,-10.872661 -4.642372,-13.696595 -4.877152,-13.316702 -0.276316,0.447097 -0.358344,8.820545 -0.12115,12.366271 0.777961,11.628147 2.209668,21.49578 4.752407,32.754183 0.740247,3.277528 1.240733,5.175351 1.850954,7.018611 0.153121,0.46222 0.278238,1.21991 0.278238,1.68374 v 0.84332 l 1.618096,0.53988 c 3.16345,1.05551 7.018083,3.118268 8.973083,4.801848 0.37754,0.32513 0.74481,0.59474 0.81616,0.59912 0.0713,0.005 -1.1e-4,-0.54365 -0.15868,-1.21785 z M 18.0877,109.21716 c -1.539844,-3.11717 -2.504517,-5.64281 -3.164866,-8.28598 -2.43245,-9.736289 -1.901385,-21.133183 1.557866,-33.432079 2.03616,-7.239305 5.572851,-16.230034 8.039562,-20.437549 0.912086,-1.555768 2.411043,-3.389824 2.425336,-2.967539 0.0047,0.130629 -0.53375,1.320827 -1.195931,2.644907 -1.795078,3.589304 -3.149924,6.87005 -5.329964,12.9063 -5.198338,14.39368 -6.748791,26.689082 -4.822806,38.245902 0.540585,3.243718 1.317433,6.222558 2.710965,10.395038 0.630491,1.88777 1.12764,3.45411 1.104799,3.48072 -0.02316,0.0266 -0.619092,-1.12076 -1.324961,-2.54972 z m 109.38403,-1.6562 c -3.08651,-0.40937 -6.21767,-2.33785 -7.53545,-4.64104 -1.31119,-2.29173 -1.57066,-5.635548 -0.7041,-9.073398 1.1026,-4.374187 3.20909,-7.076101 6.47436,-8.304389 1.6707,-0.628471 5.68227,-0.789114 7.82137,-0.313212 3.44067,0.765477 6.42952,2.957556 7.77114,5.699485 0.60028,1.226829 0.67983,1.581653 0.74747,3.334266 0.11935,3.09107 -0.6675,5.45377 -2.72849,8.193538 -2.75748,3.66566 -7.45017,5.68781 -11.8463,5.10475 z m 21.06351,-8.652628 c -0.98746,-0.63449 -1.74756,-1.89834 -1.74012,-2.89336 0.006,-0.89256 0.65362,-2.10972 1.48605,-2.79588 0.41606,-0.342953 0.84669,-0.626547 0.95695,-0.630207 0.11025,-0.0037 0.55352,-0.177191 0.98501,-0.385616 0.98865,-0.477552 1.55303,-0.479973 2.58577,-0.01111 1.5721,0.713755 1.99846,2.797173 1.01005,4.935403 -0.71364,1.54376 -1.62153,2.198 -3.17805,2.2901 -1.06368,0.0629 -1.30646,0.005 -2.10566,-0.50933 z m 23.50312,-2.27041 c -0.0783,-0.52745 -0.14478,-1.80723 -0.14756,-2.84393 -0.0208,-7.342997 -1.14914,-14.548305 -3.63383,-23.187287 -1.17455,-4.083793 -2.10783,-6.668653 -3.59228,-9.949366 -0.55349,-1.223242 -1.00636,-2.260295 -1.00636,-2.304561 0,-0.04425 0.12351,-0.0805 0.27435,-0.0805 0.63003,0 3.21479,5.847758 4.60019,10.407453 2.66044,8.756061 3.96499,16.499281 3.93015,23.327396 -0.009,1.887785 -0.0772,3.917755 -0.14988,4.511055 l -0.13226,1.07873 z M 53.322785,81.382027 c -1.372127,-1.056658 -4.502152,-4.591604 -6.829754,-7.713308 -0.723892,-0.970858 -1.6212,-2.152473 -1.994069,-2.62581 -0.809279,-1.027418 -0.851325,-1.62417 -0.2986,-4.238841 1.135631,-5.372158 1.814583,-7.334429 2.631994,-7.606901 1.005583,-0.335198 1.545959,0.414526 6.542991,9.077897 1.835502,3.182256 3.623955,6.359608 3.974308,7.060782 0.350375,0.701177 0.760748,1.415578 0.911948,1.587547 0.442967,0.5038 -0.131116,1.482135 -1.658172,2.825442 -0.73573,0.647238 -1.419408,1.353316 -1.519273,1.569062 -0.259798,0.561223 -1.077232,0.590986 -1.761373,0.06412 z M 137.16522,33.574638 c -0.48264,-0.482622 -0.5733,-0.730332 -0.5733,-1.565966 0,-1.352602 0.69961,-2.170041 1.98083,-2.314455 0.73948,-0.08335 0.97918,-0.02224 1.42222,0.362513 1.07051,0.929721 0.78076,2.91388 -0.54344,3.721378 -0.87952,0.536325 -1.61168,0.471166 -2.28631,-0.20346 z m -8.49926,-5.71799 c -0.38124,-0.453073 -0.50777,-0.822833 -0.50777,-1.483885 0,-1.136107 0.2647,-1.605899 1.10188,-1.955702 0.60089,-0.251063 0.75359,-0.247447 1.34199,0.03176 1.94267,0.921856 1.44026,4.01128 -0.65232,4.01128 -0.62575,0 -0.87431,-0.116844 -1.28378,-0.603453 z m -9.71691,-4.652865 c -0.79579,-0.795782 -0.80415,-1.627987 -0.0241,-2.407953 0.4238,-0.423807 0.75961,-0.573309 1.28777,-0.573309 1.38931,0 2.07067,0.843201 1.66779,2.06393 -0.27545,0.834651 -0.77274,1.26149 -1.63219,1.400966 -0.59992,0.09734 -0.78837,0.02721 -1.29919,-0.483634 z"
          />
        </g>
      </svg>
    </div>
  );
}