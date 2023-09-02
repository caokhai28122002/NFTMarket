import React, { SVGProps } from "react";

const TechnicalSupport = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect
        x="40"
        y="40.0001"
        width="50"
        height="50"
        fill="url(#texhnicalsupport)"
      />
      <path
        d="M128.82 64.9101C128.82 100.207 100.207 128.82 64.91 128.82C29.6135 128.82 1 100.207 1 64.9101C1 29.6136 29.6135 1.00012 64.91 1.00012C100.207 1.00012 128.82 29.6136 128.82 64.9101Z"
        stroke="#FFE5FF"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <defs>
        <pattern
          id="texhnicalsupport"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_10_2455" transform="scale(0.02)" />
        </pattern>
        <image
          id="image0_10_2455"
          width="50"
          height="50"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAACZxJREFUaEPN2nW0JVcRxeFfcHeXhRM0uLu7a0IguLs7wRLc3YJD8IW7u7sHggcW7j6sbzid1blz37vvjQTqn5npvt19dp2qXbvqzG5btmxpJ9lu1Rmrq1aXry5YnWTh3X+vvla9v3pn9ZHqbzvj+7vtJCBXqB5WXWy2qL9WX69+Xv2jOu4AesrZb35dPaF6VvW7HQG0o0AuUD2tunD1r+oD1YuqD1c/rZZt9zGrc1U3rvaqTlj9oXpI9Yzxnk1j2hEg96r2q45Svaa6S/WLsYKjV/tWZ6iOMwABaneeXX16ttI7Vo8YgD5Y3aD65WaRbA+QI1YvrPapvlPdrPrkwoftlN3h/UV7ZnXnhYvCbv/qDsMZV6y+tBkwmwXC+y+oblq9o7rRCAu58a7qySNEJPqHqldWt6uOVp22+ko1ATnPeOa11Z3Gom8zwutX1aWrb28UzGaBPKp60GCcq1X/ri5bvb463vjoA6q3jfB58fCyW4B8v3rqSPBvVMcaYcc5tx3PX3e872fV6SuksdI2A+R61etGIvOWRMZWaBT1Cgd5YXc+Xl2keu4SIHblZAOEnRVOl6teUe09VnyrsfNo2r2VtlEgJxqLUxcskDevWb26+s1gH6Ek1j9Tnan6YWVB752tQvhZmDy7TvWm6tiD6a5fvXTsDLp+Q3WNas9BJuuC2SgQDIXv71o9feyA2LZL/u36ZELsUiOHFMBFkxtYza5Ndvbqq6M4nmaw21FH/mE614TxmrZRIMJIfIvZyc49ktXCb18dsOQrQs5uSnYLWgZMgZRTaoui+uhZLRF2iuXNq5fsKBCLxP03GSw0fx8WU/wuNJjs5bObQuXh1dnGtT9Xz6+QwV/GtWNUPxhgrzLybf5+xfJbI+FPtaNAvlh5CUr9XnWC6lqjEMoDC1AMLVqys7tXjx9/lzOkyEWr44+a45nfjoRX1b1HPaLV7CI99omRS0gAzZ+/+txaYFaFFgBfHnyOjVTn+1WPWSOMXD7LIIPvVpepfjz77UTfCuqtx3WEYaFzUwyRip275SjAnMRZS20VkCtXb62eV5ESjCYiKdQT3j5C9ZORrO6/sbp2ddbqm0u+it0uOTzvNqYTmkxCA6aG0G9/mtUftQpgztzGVgFRpNSCebJNQJbFtA+Q5ej5EoN1Fj86MaBQEz6LxilCcQLiPrLBcuqWXNs0kAdXjxwem4TeKiDCgbS4+BpA7j3yR+gsajQLXAaEkv79WMdSub9sR9Dq7gMyqS1M7jNCTKhMQB47hJ3QOrj62HhGfcFY55yF29yDdoG3JTVDz1TB5Hl0K6/8RqgJQ9R+5JGfdgRRCNGJ/ZoDEdMvq863bOuG4NtjgHrcst0d1zAPVWwxCiOmYxZC4QotfQemYyq4Kj83THne0bMQnstM/tjd57g5ATnpCAe9g2RTvO42PkJfUbU8oSBKTsLuSKNI2jHqFQEoaEwhIw795gujv5ATRKKeg7xBu+SJkPnRqFOcQL5gSqGM2aba88/BWqj6VYPi0TnS2W8CYrvthKInNHjSBx84vCikSIbTLbhGQRNSwvGG49npJ8gAOO8VRjSZblJITiGh4ns3CSIcMdPcJiC0G1VgpziGXhOS7xnf3gOQcwz2sCB0yzYCRIEkAlV34tBOLjP3hZUdXdb6nnhIFM2Y0HtoxftsPSDuT4p8f0B4jtbBTlNorALCwweOtnRRNApTPcpbqj8uQYbN7MRcFXMmea/30LcI7Y0AodOE5YGAWPS7R/Wcit4qID6CaRQ/iyUv7I7tViQtRt8tVL2bYTehACQjz+2inBPzHKpmUdKTuFy1I5iRCjgAEAlOTkg6CWmAsBEgFsO77xuhY5vvPzSZxZttUQQSn00d4mdHYyWkhKT75A8QBOrc1gMiKp40kn6fKdn1yj76qfFibIKnVyW7jwL/5jEF8e97jLCxM2u1unLBzIsAVSvQMZZctGVAPl9dfaho+aT47j6vI9hE4ZsK1fRSCeraQUOdLvleElVb6h2E4UaGD8JCmyys1INlNgFRi6zDrqLnyahkO3/IHIjF0ke2l4Kld8Svxkm4yQF0upZJYDrLB9cbB82LoWfWGy4gATXMrssxEQMI4Yiq7bh6dJjKvs4aN31L4bPtp55NSnxcLRHCyzTWeh+hFNC4euUd29gq9btpBBt4AEhy3K4zghCV+3Mt+78EghhMR+ZmHnDmWSFcBCS0qV4hSzD+z3dEsTxkzACIR7JHPbIjFjhV9PlCTVyMXg0f0PV2NVYbiJRN/WQORPFFMOoPfWeWtWzkAxzhqH1YphS2LmC9HPERE0U6adF80HaTFZs9KcJ+U/8xvZfMoHyXjYs25Kn1gKjaTpTWMiFisIamtzplsJT6AJzC5TeLNiW7Z9lWrbQi2RffQeboYeyQufFBgBCL+gyxOHmXx08+pMMTh9TG40xDc8+RnF7Ikwbaqq26MzdtKz2mp6GJlibqhlz+3x9Zpw7ySrNn1K49AVkVGsKLXJnb1M7Or/EOFa0dAFrFBW5uegnHEcLro6vGoLMH7aIJpGKtnnAOB9NrhOfBExBDMFrHAwxKvYleeT0gFuW0SjenQVpMVpVbqOkIhcIUTr4hHxRGbAQ8zbToVB2mCY65s91G05iLY6dvbZ0hTECWKU+nszy8FhDeNsBzKLNR4yjKmuSwwFPMHiQ1SA6TG0rccE+7zBGaMuHs/uIpsDnD3oc3kDlg5KAxAswMQNyrF9pZo1GeR72crOFbdJjexxDkFnqeXQlEf69WCB/niRO7rbV7gDlcNZL1d8NxkxaDiLnJEQdEpidCz+Bur10JxKDbQQ4T+2ZfFKtr6o/wWTSjU0MPIW0YsWhY0tyYnOcYvY/Q2rIrgViECQpqlm900kTh7ml7LdhuOeSRvNMU8r6zab7fGhjqdZAGBUBB++2h+bKrgcw9KtEd5piDWRCROJlkRt+O9igGNQwwcys9kLmZcHv7CFdnKoexwxPI4rfVAKEiBM2ptL2mis7geVpoyQNtt8MeZy5mAUuP4DYDxH8QwPWGeQri9tDvWok+v+6Ey/v9SboLM/8tZJkyPvS5jQIRw6YfDBtNld18VrXeGeaYzYxM02XRkljtWEYK23xvAgK5w5UpGbGMmMbzCiIKnYQdSp1LFBKbx5yJrHvyugZaRdW4VSFEp5LfEGTNY7Zl7wEEDxNjeoVFiSDBDMyEE2CKErBPGTMt87CpZd3RXaGC5YcTsk07ZD0ZT/ShSFMOi7fFOjr6iU4CyjEDuY9ijYB4dJUInQPmKIlsLETvbXc/8h+6aDgeHuZz0AAAAABJRU5ErkJggg=="
        />
      </defs>
    </svg>
  );
};

export default TechnicalSupport;
