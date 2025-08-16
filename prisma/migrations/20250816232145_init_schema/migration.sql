-- CreateEnum
CREATE TYPE "public"."Residency" AS ENUM ('TW', 'OTHER');

-- CreateEnum
CREATE TYPE "public"."KycStatus" AS ENUM ('DRAFT', 'PENDING', 'APPROVED', 'REJECTED', 'NEEDS_MORE_INFO', 'EXPIRED');

-- CreateEnum
CREATE TYPE "public"."DocType" AS ENUM ('TW_ID_FRONT', 'TW_ID_BACK', 'TW_SECOND_NHI', 'TW_SECOND_DL', 'TW_SECOND_RC', 'TW_SECOND_PASSPORT', 'OTHER_PASSPORT');

-- CreateEnum
CREATE TYPE "public"."Severity" AS ENUM ('INFO', 'WARN', 'ERROR', 'SECURITY');

-- CreateEnum
CREATE TYPE "public"."ActorType" AS ENUM ('SYSTEM', 'USER', 'ADMIN', 'WHMCS', 'CRON');

-- CreateTable
CREATE TABLE "public"."Applicant" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "whmcsClientId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "residency" "public"."Residency",
    "latestSessionId" TEXT,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."KycSession" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "applicantId" TEXT NOT NULL,
    "tokenSalt" TEXT NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "consumedAt" TIMESTAMP(3),
    "status" "public"."KycStatus" NOT NULL DEFAULT 'DRAFT',
    "residency" "public"."Residency",

    CONSTRAINT "KycSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Document" (
    "id" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "type" "public"."DocType" NOT NULL,
    "objectKey" TEXT NOT NULL,
    "mime" TEXT NOT NULL,
    "bytes" INTEGER NOT NULL,
    "sha256" TEXT NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Decision" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sessionId" TEXT NOT NULL,
    "status" "public"."KycStatus" NOT NULL,
    "reason" TEXT,
    "decidedBy" TEXT NOT NULL,

    CONSTRAINT "Decision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AuditLog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event" TEXT NOT NULL,
    "severity" "public"."Severity" NOT NULL DEFAULT 'INFO',
    "message" TEXT,
    "data" JSONB,
    "correlationId" TEXT,
    "ip" TEXT,
    "ua" TEXT,
    "actorType" "public"."ActorType" NOT NULL DEFAULT 'SYSTEM',
    "actorId" TEXT,
    "whmcsClientId" INTEGER,
    "applicantId" TEXT,
    "sessionId" TEXT,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OutboundWebhookLog" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kind" TEXT NOT NULL,
    "targetUrl" TEXT NOT NULL,
    "event" TEXT NOT NULL,
    "payload" JSONB NOT NULL,
    "statusCode" INTEGER,
    "responseBody" TEXT,
    "error" TEXT,
    "attempt" INTEGER NOT NULL DEFAULT 1,
    "maxAttempts" INTEGER NOT NULL DEFAULT 3,
    "nextAttemptAt" TIMESTAMP(3),

    CONSTRAINT "OutboundWebhookLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_whmcsClientId_key" ON "public"."Applicant"("whmcsClientId");

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_latestSessionId_key" ON "public"."Applicant"("latestSessionId");

-- CreateIndex
CREATE INDEX "Applicant_whmcsClientId_idx" ON "public"."Applicant"("whmcsClientId");

-- CreateIndex
CREATE INDEX "Applicant_email_idx" ON "public"."Applicant"("email");

-- CreateIndex
CREATE INDEX "KycSession_applicantId_status_idx" ON "public"."KycSession"("applicantId", "status");

-- CreateIndex
CREATE INDEX "KycSession_expiresAt_idx" ON "public"."KycSession"("expiresAt");

-- CreateIndex
CREATE INDEX "KycSession_tokenHash_idx" ON "public"."KycSession"("tokenHash");

-- CreateIndex
CREATE INDEX "Document_sessionId_idx" ON "public"."Document"("sessionId");

-- CreateIndex
CREATE INDEX "Document_type_idx" ON "public"."Document"("type");

-- CreateIndex
CREATE INDEX "Document_sha256_idx" ON "public"."Document"("sha256");

-- CreateIndex
CREATE INDEX "Decision_sessionId_status_idx" ON "public"."Decision"("sessionId", "status");

-- CreateIndex
CREATE INDEX "AuditLog_createdAt_idx" ON "public"."AuditLog"("createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_event_idx" ON "public"."AuditLog"("event");

-- CreateIndex
CREATE INDEX "AuditLog_severity_idx" ON "public"."AuditLog"("severity");

-- CreateIndex
CREATE INDEX "AuditLog_sessionId_idx" ON "public"."AuditLog"("sessionId");

-- CreateIndex
CREATE INDEX "AuditLog_whmcsClientId_idx" ON "public"."AuditLog"("whmcsClientId");

-- CreateIndex
CREATE INDEX "AuditLog_applicantId_idx" ON "public"."AuditLog"("applicantId");

-- CreateIndex
CREATE INDEX "OutboundWebhookLog_createdAt_idx" ON "public"."OutboundWebhookLog"("createdAt");

-- CreateIndex
CREATE INDEX "OutboundWebhookLog_kind_event_idx" ON "public"."OutboundWebhookLog"("kind", "event");

-- CreateIndex
CREATE INDEX "OutboundWebhookLog_nextAttemptAt_idx" ON "public"."OutboundWebhookLog"("nextAttemptAt");

-- AddForeignKey
ALTER TABLE "public"."Applicant" ADD CONSTRAINT "Applicant_latestSessionId_fkey" FOREIGN KEY ("latestSessionId") REFERENCES "public"."KycSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."KycSession" ADD CONSTRAINT "KycSession_applicantId_fkey" FOREIGN KEY ("applicantId") REFERENCES "public"."Applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Document" ADD CONSTRAINT "Document_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."KycSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Decision" ADD CONSTRAINT "Decision_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."KycSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AuditLog" ADD CONSTRAINT "AuditLog_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "public"."KycSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;
