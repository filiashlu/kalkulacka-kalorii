function calc() {
    let A = document.getElementById("vek").value;
    let W = document.getElementById("vaha").value;
    let H = document.getElementById("vyska").value;
    let S
    let R

    if (document.getElementById("vek").value.length == 0) {

        document.getElementById("ATT").style = "color: red;"
        document.getElementById("WTT").style = "display: none;"
        document.getElementById("HTT").style = "display: none;"

        return

    }

    if (document.getElementById("vaha").value.length == 0) {

        document.getElementById("ATT").style = "display: none;"
        document.getElementById("HTT").style = "display: none;"
        document.getElementById("WTT").style = "color: red;"

        return

    }

    if (document.getElementById("vyska").value.length == 0) {

        document.getElementById("ATT").style = "display: none;"
        document.getElementById("WTT").style = "display: none;"
        document.getElementById("HTT").style = "color: red;"

        return

    }

    if (document.getElementById("muz").checked) {
        S = Math.round((9.99 * W) + (6.25 * H) - (4.92 * A) + 5)
    } else if (document.getElementById("zena").checked) {
        S = Math.round((9.99 * W) + (6.25 * H) - (4.92 * A) - 161)
    }

    if (document.getElementById("0").selected) {
        R = S
    }

    if (document.getElementById("1").selected) {
        R = S * 1.2
    }

    if (document.getElementById("2").selected) {
        R = S * 1.35
    }

    if (document.getElementById("3").selected) {
        R = S * 1.55
    }

    if (document.getElementById("4").selected) {
        R = S * 1.75
    }

    if (document.getElementById("5").selected) {
        R = S * 1.95
    }

    document.getElementById("ATT").style = "display: none;"
    document.getElementById("HTT").style = "display: none;"
    document.getElementById("WTT").style = "display: none;"

    document.getElementById("vek").placeholder = " "
    document.getElementById("vaha").placeholder = "Kg"
    document.getElementById("vyska").placeholder = "Cm"

    document.getElementById("a").innerHTML = Math.round(R)

    document.getElementById("b").innerHTML = Math.round(R * 0.80)

    document.getElementById("c").innerHTML = Math.round(R * 1.20)

    document.getElementById("Final").style = "max-width: 25rem; margin: auto; border: 6px solid blue; width: 50%; margin-top: 45px; border-radius: 20px; margin-bottom: 30px"
}