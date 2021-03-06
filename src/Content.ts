﻿import fs from "fs";
import http from "http";
import url from "url";

export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>SandBox9A</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = url.parse(req.url as string, true).query;

        // Kezd a kódolást innen -->

        // let x = 12;
        // x = 20;
        // res.write(`${x}` + "\n");
        // res.write(x.toString() + "\n");
        // const szöveg = "alma";
        // res.write(szöveg + "\n");
        // let esik: boolean;
        // esik = false;
        // esik = true;
        // res.write(`${!esik}\n`);
        // res.write(esik);

        // res.write("Téglalap területe és kerülete\n");
        // res.write("a =");
        // let oldalA: number = parseInt(params.inputa as string);
        // if (isNaN(oldalA)) {
        //     oldalA = 0;
        // }
        // res.write(`<input type='text' name='inputa' value=${oldalA} style='width:5em;' onChange='this.form.submit();'>\n`);

        // res.write("Téglalap területe és kerülete\n");
        // res.write("b =");
        // let oldalB: number = parseInt(params.inputb as string);
        // if (isNaN(oldalB)) {
        //     oldalB = 0;
        // }
        // res.write(`<input type='text' name='inputb' value=${oldalB} style='width:5em;' onChange='this.form.submit();'>\n`);

        // const terület = oldalA * oldalB;
        // const kerület = (oldalA + oldalB) * 2;
        // res.write(`Terület = ${terület}\n`);
        // res.write(`Kerület = ${kerület}\n`);
        // res.write("\n\n");

        // res.write("<h2>Páros-páratlan meghatározó</h2>\n");
        // res.write("x =");
        // let x: number = parseInt(params.inputx as string);
        // if (isNaN(x)) {
        //     x = 0;
        // }
        // res.write(`<input type='number' name='inputx' value=${x} style='width:5em;' onChange='this.form.submit();'>\n`);
        // if (x % 2 === 0) {
        //     res.write("A szám páros!\n\n\n");
        // } else {
        //     res.write("A szám páratlan!\n\n\n");
        // }

        // res.write("<h2>KRÉTA</h2>");
        // res.write("Kérem az osztályzatot: ");
        // let jegy: number = parseInt(params.jegy as string);
        // if (isNaN(jegy)) {
        //     jegy = 5;
        // }
        // res.write(`<input type='number' name='jegy' value=${jegy} style='width:5em;' onChange='this.form.submit();'>\n`);
        // switch (jegy) {
        //     case 1:
        //         res.write("Elégtelen\n");
        //         break;
        //     case 2:
        //         res.write("Elégséges\n");
        //         break;
        //     case 3:
        //         res.write("Közepes\n");
        //         break;
        //     case 4:
        //         res.write("Jó\n");
        //         break;
        //     case 5:
        //         res.write("Jeles\n");
        //         break;

        //     default:
        //         res.write("Ez nem osztlyzat");
        //         break;
        // }

        res.write("<h2>Szabályosháromszög teülete</h2>\n");
        res.write("a =");
        let a: number = parseInt(params.inputa as string);
        if (isNaN(a)) {
            a = 0;
        }
        res.write(`<input type='number' name='inputa' value=${a} style='width:5em;' onChange='this.form.submit();'>\n\n`);
        const terület = (a * (Math.sqrt(3) / 2) * a) / 2;
        res.write(`Terület: ${terület}`);

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
