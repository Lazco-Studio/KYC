import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
// import { auditAndDiscord } from "@/lib/audit-discord";

export async function POST(req: NextRequest) {
  const raw = await req.text();
  const { whmcsClientId, email } = JSON.parse(raw || "{}");

  if (req.headers.get("x-api-key") !== process.env.WHMCS_API_KEY) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let applicant = await prisma.applicant.findFirst({
    where: {
      AND: [{ whmcsClientId: whmcsClientId }, { email: email }],
    },
  });

  if (!applicant) {
    return NextResponse.json({ success: false, message: "Not Found" });
  } else {
    let kycSession = await prisma.kycSession.findFirst({
      where: { applicantId: applicant.id },
    });

    if (!kycSession) {
      return NextResponse.json({
        success: false,
      });
    }

    return NextResponse.json({
      success: true,
      data: {
        applicantId: applicant.id,
        status: kycSession.status,
        residency: applicant.residency,
        updatedAt: kycSession.updatedAt,
      },
    });
  }

  // await auditAndDiscord(
  //   {
  //     event: "DATA_FETCH",
  //     applicantId: applicant.id,
  //     whmcsClientId,
  //     email
  //     message: `customer `,
  //   },
  //   { verifyUrl, expiresAt }
  // );
}

export const dynamic = "force-dynamic";
export const dynamicParams = false;
export const revalidate = false;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
