-- CreateTable
CREATE TABLE "BreakOutHighScore" (
    "HSID" SERIAL NOT NULL,
    "initial" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "BreakOutHighScore_pkey" PRIMARY KEY ("HSID")
);
