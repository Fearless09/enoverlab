import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return new Response("Only POST requests allowed", { status: 405 });
  }
  const body = req.body as Step1FormType;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEET_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEET_PRIVATE_KEY?.replace(
          /\\n/g,
          "\n",
        ),
        type: "service_account",
        client_id: process.env.GOOGLE_SHEET_CLIENT_ID,
        token_url: process.env.GOOGLE_SHEET_TOKEN_URL,
        universe_domain: "googleapis.com",
      },
      projectId: "enoverlab-spreadsheet",
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheet = google.sheets({ version: "v4", auth });
    const response = await sheet.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_SPREADSHEET_ID,
      range: "Sheet1!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.name,
            body.number,
            body.email,
            body.internship_role,
            body.experience_level,
            body.question,
            body.hear_about_us,
          ],
        ],
      },
    });

    console.log("Sheet res, ", response);

    return Response.json({
      data: response.data,
      status: 200,
      message: "success",
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
}
