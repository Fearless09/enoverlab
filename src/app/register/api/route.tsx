import { code, data } from "framer-motion/client";
import { google } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!clientEmail || !privateKey || !spreadsheetId) {
    return Response.json({
      code: 500,
      message: "Missing environment variables",
    });
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: [
      "https://www.googleapis.com/auth/spreadsheets",
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.file",
    ],
  });

  const sheets = google.sheets({ version: "v4", auth });

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            req.body.name,
            req.body.number,
            req.body.email,
            req.body.internship_role,
            req.body.experience_level,
            req.body.expectation_onboarding,
            req.body.hear_about_us,
          ],
        ],
      },
    });

    return Response.json({
      code: 200,
      data: response.data,
      message: "Success",
    });
  } catch (error) {
    const errorMessage =
      (error as Error).message || "An unknown error occurred";
    console.error("Error appending data to Google Sheets:", error);
    return Response.json({ error: errorMessage, code: 500 });
  }
}
