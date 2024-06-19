export const DropdownSVG = () => (
    <svg
        width={14}
        height={8}
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.376 7.376a1 1 0 0 1-1.414 0L.305 1.72A1 1 0 1 1 1.72.305l4.95 4.95 4.95-4.95a1 1 0 0 1 1.414 1.414z"
            fill="#323232"
        />
    </svg>
);

export const RightArrowSVG = ({ color }: {
    color?: string
}) => (
    <svg
        width={27}
        height={24}
        viewBox="0 0 27 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#a)">
            <path
                d="m24.3 12 .637.566.636-.566-.636-.566zm-.637-.566-7.2 6.4 1.274 1.132 7.2-6.4zm1.274 0-7.2-6.4-1.274 1.132 7.2 6.4zM24.3 11.2H-4.95v1.6H24.3z"
                fill={color || "#0046FF"}
            />
        </g>
        <defs>
            <clipPath id="a">
                <rect
                    x={27}
                    width={24}
                    height={27}
                    rx={10}
                    transform="rotate(90 27 0)"
                    fill="none"
                />
            </clipPath>
        </defs>
    </svg>
);

export const PlayIconSVG = ({ color, style }: {
    color?: string,
    style?: string
}) => (
    <svg
        width={36}
        height={40}
        viewBox="0 0 36 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={style}
    >
        <path
            d="M33.39 15.657c3.363 1.92 3.363 6.767 0 8.686L7.505 39.115C4.17 41.017.026 38.61.026 34.772V5.228c0-3.838 4.145-6.245 7.479-4.343z"
            fill={color || "#0046FF"}
        />
    </svg>
);

export const CultureSVG = ({ style }: {
    style?: string
}) => (
    <svg
        width={30}
        height={30}
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-[30px] h-[30px] ${style}`}
    >
        <circle cx={15} cy={15} r={14.25} stroke="#0046FF" strokeWidth={1.5} />
        <circle cx={15} cy={15} r={10.25} stroke="#0046FF" strokeWidth={1.5} />
        <circle cx={15} cy={15} r={5} stroke="#0046FF" strokeWidth={2} />
    </svg>
);

export const CommunicationSVG = ({ style }: {
    style?: string
}) => (
    <svg
        width={28}
        height={28}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-[30px] h-[30px] ${style}`}
    >
        <path
            d="M2 8.957a5 5 0 1 0 5.08-5 1 1 0 0 0 .5-.15c.52-.325 1.066-.609 1.63-.85a1 1 0 1 0-.8-1.83 14 14 0 0 0-1.9 1A1 1 0 0 0 7 3.957a5 5 0 0 0-5 5m19 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10m2.08 1h-4.16a4.93 4.93 0 0 0-3.72 1.7 6.86 6.86 0 0 1 .8 3.22v3.08a2.8 2.8 0 0 1-.18 1h5.07a1 1 0 0 0 1.49 1.21q.745-.559 1.41-1.21H27a1 1 0 0 0 1-1v-3.08a4.93 4.93 0 0 0-4.92-4.92m-2.21-13.2a14 14 0 0 0-2-.91 1 1 0 1 0-.7 1.87q.865.326 1.67.78a1.003 1.003 0 1 0 1-1.74zm-8.1.26a12 12 0 0 1 1.85 0 1.002 1.002 0 0 0 .1-2 14 14 0 0 0-2.15.06 1.001 1.001 0 0 0 .1 2zm-.55 25.83h.13a1.002 1.002 0 0 0 .13-2q-.92-.114-1.81-.37a1 1 0 0 0-.55 1.92c.687.204 1.39.354 2.1.45m4.29-.11q1.062-.195 2.08-.55a1 1 0 1 0-.66-1.89q-.871.305-1.78.47a1.004 1.004 0 1 0 .18 2zm-11.98-3.47q.793.73 1.69 1.33a1 1 0 0 0 1.13-1.64H13a1 1 0 0 0 1-1v-3.08a4.92 4.92 0 0 0-4.92-4.92H4.92A4.92 4.92 0 0 0 0 19.877v3.08a1 1 0 0 0 1 1h3.31a1 1 0 0 0 .22.31"
            fill="#0046FF"
        />
    </svg>
);

export const ReadinessSVG = ({ style }: {
    style?: string
}) => (
    <svg
        width={31}
        height={31}
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-[30px] h-[30px] ${style}`}
    >
        <path
            d="M10.898 24.809v3.445c0 .752-.341 1.455-.924 1.926h19.142c.641 0 1.167-.526 1.167-1.168v-4.203zM19.516 5.45a2.16 2.16 0 1 0-4.319.001 2.16 2.16 0 0 0 4.32 0m.554 0a2.714 2.714 0 0 1-5.426 0 2.713 2.713 0 0 1 5.426 0m2.559.596V4.855l-1.055-.406a.28.28 0 0 1-.177-.184 4.2 4.2 0 0 0-.34-.825.28.28 0 0 1-.014-.249l.462-1.045-.843-.844-1.03.457a.27.27 0 0 1-.257-.004 4 4 0 0 0-.825-.341.28.28 0 0 1-.186-.17L17.954.18h-1.192l-.411 1.065a.28.28 0 0 1-.184.169 4 4 0 0 0-.828.34.28.28 0 0 1-.255.005l-1.031-.457-.844.844.463 1.045c.037.082.03.17-.014.249q-.214.396-.34.825a.28.28 0 0 1-.175.184l-1.055.406v1.192l1.055.407c.08.027.148.094.174.184q.127.43.341.825a.27.27 0 0 1 .014.249l-.463 1.043.844.846 1.031-.457a.27.27 0 0 1 .255.004c.261.141.541.257.828.341a.28.28 0 0 1 .184.17l.411 1.064h1.192l.41-1.065a.28.28 0 0 1 .186-.169c.284-.084.564-.2.825-.34a.27.27 0 0 1 .257-.005l1.03.457.843-.846-.463-1.043a.28.28 0 0 1 .014-.25q.214-.395.34-.824a.27.27 0 0 1 .177-.184zm.122 12.959v1.263a1.7 1.7 0 0 1-1.697 1.695H6.49v6.29c0 1.068.827 1.817 1.745 1.915 1.128.122 2.108-.79 2.108-1.914v-3.722c0-.153.125-.277.279-.277h17.602v-11.6zm-1.328-4.902a1.1 1.1 0 0 0-.369-.061H1.441c-.627 0-1.141.514-1.141 1.141v5.085c0 .628.514 1.142 1.141 1.142h19.613c.628 0 1.144-.514 1.144-1.142v-1.041l-2.734.726a.275.275 0 0 1-.355-.294l.362-3.219a.27.27 0 0 1 .067-.15zm6.8-7.145V5.171a1.17 1.17 0 0 0-1.168-1.167h-5.103l1.051.404c.11.043.177.147.177.257v1.57a.28.28 0 0 1-.177.26l-1.118.429q-.114.356-.284.688l.475 1.07a.28.28 0 0 1-.046.333l-1.111 1.11a.275.275 0 0 1-.306.056l-1.094-.486a5 5 0 0 1-.689.286l-.421 1.095a.28.28 0 0 1-.267.2h-1.57a.28.28 0 0 1-.266-.2l-.423-1.095a5 5 0 0 1-.686-.286l-1.097.486a.28.28 0 0 1-.306-.057l-1.111-1.11a.28.28 0 0 1-.045-.333l.474-1.069a5 5 0 0 1-.284-.688l-1.118-.43a.28.28 0 0 1-.177-.258V4.665c0-.11.067-.214.177-.257l1.05-.404H7.659a1.17 1.17 0 0 0-1.17 1.166v8.32h14.565c.269 0 .522.062.748.173l5.179-6.007a2.1 2.1 0 0 1 1.243-.698m.506 4.266 1.018-1.18c.266-.308.396-.76.369-1.128-.102-1.392-1.836-1.924-2.72-.898L26.38 9.2zm-5.518 6.4-2.349-2.025-.641.743 2.35 2.026zm-1.32-1.867 4.799-5.565-.67-.576-4.799 5.565zm5.217-5.204-4.799 5.566 1.263 1.088 4.798-5.566zM5.69 16.257H2.602v2.94h3.09zm-3.365-.553H5.97c.15 0 .277.124.277.277v3.493a.28.28 0 0 1-.277.276H2.326a.277.277 0 0 1-.277-.276V15.98c0-.154.124-.277.277-.277m5.825 3.247c-.365 0-.365-.553 0-.553h10.154c.365 0 .365.553 0 .553zm0-1.894c-.365 0-.365-.553 0-.553h10.154c.365 0 .365.553 0 .553zm-5.068.765c-.26-.256.124-.65.385-.397l.531.518.794-.948c.233-.278.657.077.424.355l-.987 1.175a.275.275 0 0 1-.404.022zm16.896-.957-.276 2.455 2.386-.635z"
            fill="#0046FF"
        />
    </svg>
);