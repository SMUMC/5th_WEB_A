const color = {
    white: "#ffffff",
    black: "#000000",
    background: "#22254B",
    navbar: "#1a1c3a",
    highlight: "#FFCD28",
}

const styles = {
    flexCenter: `
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    flexCenterColumn: `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    flexCenterRow: `
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    `,
    ContainerStyles: `
        display: flex;
        flex: 1;
        justify-content: center;
        padding: 80px 20px;
    `,
}

const theme = {
    color,
    styles,
}

export default theme;
