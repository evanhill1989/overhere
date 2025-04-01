ALTER TABLE "users_table" ALTER COLUMN "name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" ALTER COLUMN "email" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "age";