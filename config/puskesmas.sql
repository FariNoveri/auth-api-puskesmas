-- -------------------------------------------------------------
-- TablePlus 6.4.4(604)
--
-- https://tableplus.com/
--
-- Database: puskesmas
-- Generation Time: 2025-04-21 17:38:36.9090
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."cache" (
    "key" varchar(255) NOT NULL,
    "value" text NOT NULL,
    "expiration" int4 NOT NULL,
    PRIMARY KEY ("key")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."cache_locks" (
    "key" varchar(255) NOT NULL,
    "owner" varchar(255) NOT NULL,
    "expiration" int4 NOT NULL,
    PRIMARY KEY ("key")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS failed_jobs_id_seq;

-- Table Definition
CREATE TABLE "public"."failed_jobs" (
    "id" int8 NOT NULL DEFAULT nextval('failed_jobs_id_seq'::regclass),
    "uuid" varchar(255) NOT NULL,
    "connection" text NOT NULL,
    "queue" text NOT NULL,
    "payload" text NOT NULL,
    "exception" text NOT NULL,
    "failed_at" timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS histori_stok_obat_id_seq;

-- Table Definition
CREATE TABLE "public"."histori_stok_obat" (
    "id" int8 NOT NULL DEFAULT nextval('histori_stok_obat_id_seq'::regclass),
    "obat_id" int8 NOT NULL,
    "order_id" int8 NOT NULL,
    "tanggal_masuk" date NOT NULL,
    "tanggal_keluar" date NOT NULL,
    "jumlah_awal" int4 NOT NULL DEFAULT 0,
    "jumlah_baru" int4 NOT NULL DEFAULT 0,
    "jumlah_akhir" int4 NOT NULL DEFAULT 0,
    "created_at" timestamp(0),
    "updated_at" timestamp(0),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."job_batches" (
    "id" varchar(255) NOT NULL,
    "name" varchar(255) NOT NULL,
    "total_jobs" int4 NOT NULL,
    "pending_jobs" int4 NOT NULL,
    "failed_jobs" int4 NOT NULL,
    "failed_job_ids" text NOT NULL,
    "options" text,
    "cancelled_at" int4,
    "created_at" int4 NOT NULL,
    "finished_at" int4,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS jobs_id_seq;

-- Table Definition
CREATE TABLE "public"."jobs" (
    "id" int8 NOT NULL DEFAULT nextval('jobs_id_seq'::regclass),
    "queue" varchar(255) NOT NULL,
    "payload" text NOT NULL,
    "attempts" int2 NOT NULL,
    "reserved_at" int4,
    "available_at" int4 NOT NULL,
    "created_at" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS m_gudang_id_seq;

-- Table Definition
CREATE TABLE "public"."m_gudang" (
    "id" int8 NOT NULL DEFAULT nextval('m_gudang_id_seq'::regclass),
    "kode_gudang" bpchar(100) NOT NULL,
    "nama_gudang" varchar(255) NOT NULL,
    "lokasi" varchar(255),
    "keterangan" varchar(255),
    "created_by" int8 NOT NULL,
    "updated_by" int8 NOT NULL,
    "created_at" timestamp(0),
    "updated_at" timestamp(0),
    PRIMARY KEY ("id")
);

-- Column Comment
COMMENT ON COLUMN "public"."m_gudang"."created_by" IS 'relasi ke table useR';
COMMENT ON COLUMN "public"."m_gudang"."updated_by" IS 'relasi ke table user';

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS m_obat_id_seq;

-- Table Definition
CREATE TABLE "public"."m_obat" (
    "id" int8 NOT NULL DEFAULT nextval('m_obat_id_seq'::regclass),
    "nama_obat" bpchar(100) NOT NULL,
    "satuan_id" int8 NOT NULL,
    "gudang_id" int8 NOT NULL,
    "stok" int4 NOT NULL DEFAULT 0,
    "jenis_obat" int2 NOT NULL DEFAULT '1'::smallint,
    "tanggal_kadaluarsa" date,
    "bpom" bpchar(255),
    "gambar_obat" varchar(255),
    "keterangan" text,
    "created_by" int8 NOT NULL,
    "updated_by" int8 NOT NULL,
    "created_at" timestamp(0),
    "updated_at" timestamp(0),
    PRIMARY KEY ("id")
);

-- Column Comment
COMMENT ON COLUMN "public"."m_obat"."satuan_id" IS 'relasi ke table m_satuan_obat';
COMMENT ON COLUMN "public"."m_obat"."gudang_id" IS 'relasi ke table m_kategori_obat';
COMMENT ON COLUMN "public"."m_obat"."jenis_obat" IS '0 = tidak ada, 1 = injeksi, 2 = oral';
COMMENT ON COLUMN "public"."m_obat"."created_by" IS 'relasi ke table useR';
COMMENT ON COLUMN "public"."m_obat"."updated_by" IS 'relasi ke table user';

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS m_satuan_obat_id_seq;

-- Table Definition
CREATE TABLE "public"."m_satuan_obat" (
    "id" int8 NOT NULL DEFAULT nextval('m_satuan_obat_id_seq'::regclass),
    "nama_satuan" varchar(255) NOT NULL,
    "keterangan" varchar(255),
    "created_by" int8 NOT NULL,
    "updated_by" int8 NOT NULL,
    "created_at" timestamp(0),
    "updated_at" timestamp(0),
    PRIMARY KEY ("id")
);

-- Column Comment
COMMENT ON COLUMN "public"."m_satuan_obat"."created_by" IS 'relasi ke table user';
COMMENT ON COLUMN "public"."m_satuan_obat"."updated_by" IS 'relasi ke table user';

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS m_unit_layanan_id_seq;

-- Table Definition
CREATE TABLE "public"."m_unit_layanan" (
    "id" int8 NOT NULL DEFAULT nextval('m_unit_layanan_id_seq'::regclass),
    "unit_layanan" varchar(255) NOT NULL,
    "keterangan" varchar(255) NOT NULL,
    "created_at" timestamp(0),
    "updated_at" timestamp(0),
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS migrations_id_seq;

-- Table Definition
CREATE TABLE "public"."migrations" (
    "id" int4 NOT NULL DEFAULT nextval('migrations_id_seq'::regclass),
    "migration" varchar(255) NOT NULL,
    "batch" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."order_details" (
    "order_id" int4 NOT NULL,
    "obat_id" int4 NOT NULL,
    "jumlah_obat" int4 NOT NULL,
    PRIMARY KEY ("order_id","obat_id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."password_reset_tokens" (
    "email" varchar(255) NOT NULL,
    "token" varchar(255) NOT NULL,
    "created_at" timestamp(0),
    PRIMARY KEY ("email")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."sessions" (
    "id" varchar(255) NOT NULL,
    "user_id" int8,
    "ip_address" varchar(45),
    "user_agent" text,
    "payload" text NOT NULL,
    "last_activity" int4 NOT NULL,
    PRIMARY KEY ("id")
);

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS trn_order_id_seq;

-- Table Definition
CREATE TABLE "public"."trn_order" (
    "id" int8 NOT NULL DEFAULT nextval('trn_order_id_seq'::regclass),
    "unit_layanan_id" int8 NOT NULL,
    "user_id" int8 NOT NULL,
    "tgl_order" date,
    "status" int2 NOT NULL DEFAULT '0'::smallint,
    "jam_order" time(0),
    "created_by" int8 NOT NULL,
    "updated_by" int8 NOT NULL,
    "created_at" timestamp(0),
    "updated_at" timestamp(0),
    PRIMARY KEY ("id")
);

-- Column Comment
COMMENT ON COLUMN "public"."trn_order"."status" IS '0=Menunggu, 1=Di Proses, 2=Selesai';
COMMENT ON COLUMN "public"."trn_order"."created_by" IS 'relasi ke table useR';
COMMENT ON COLUMN "public"."trn_order"."updated_by" IS 'relasi ke table user';

-- This script only contains the table creation statements and does not fully represent the table in the database. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS users_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int8 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "name" varchar(255) NOT NULL,
    "username" varchar(255) NOT NULL,
    "email" varchar(255) NOT NULL,
    "email_verified_at" timestamp(0),
    "password" varchar(255) NOT NULL,
    "unit_layanan_id" int8 NOT NULL,
    "foto" varchar(255),
    "remember_token" varchar(100),
    "created_at" timestamp(0),
    "updated_at" timestamp(0),
    PRIMARY KEY ("id")
);

-- Column Comment
COMMENT ON COLUMN "public"."users"."name" IS 'menyimpan nama lengkap';
COMMENT ON COLUMN "public"."users"."unit_layanan_id" IS 'relasi ke table unit layanan (UGD, rawat inap, persalinan, gigi dan mulut)';

INSERT INTO "public"."migrations" ("id", "migration", "batch") VALUES
(1, '0001_01_01_000000_create_m_unit_layanan_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '0001_01_01_000003_create_users_table', 1),
(5, '2025_04_21_091335_create_m_satuan_obat_table', 1),
(6, '2025_04_21_093053_create_m_gudang_table', 1),
(7, '2025_04_21_094323_create_m_obat_table', 1),
(8, '2025_04_21_100805_create_m_trn_order_table', 1),
(9, '2025_04_21_102539_create_order_details_table', 2),
(10, '2025_04_21_103332_create_histori_stok_obat_table', 2);



-- Indices
CREATE UNIQUE INDEX failed_jobs_uuid_unique ON public.failed_jobs USING btree (uuid);
ALTER TABLE "public"."histori_stok_obat" ADD FOREIGN KEY ("obat_id") REFERENCES "public"."m_obat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."histori_stok_obat" ADD FOREIGN KEY ("order_id") REFERENCES "public"."trn_order"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- Indices
CREATE INDEX jobs_queue_index ON public.jobs USING btree (queue);
ALTER TABLE "public"."m_gudang" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."m_gudang" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- Indices
CREATE UNIQUE INDEX m_gudang_kode_gudang_unique ON public.m_gudang USING btree (kode_gudang);
ALTER TABLE "public"."m_obat" ADD FOREIGN KEY ("satuan_id") REFERENCES "public"."m_satuan_obat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."m_obat" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."m_obat" ADD FOREIGN KEY ("gudang_id") REFERENCES "public"."m_gudang"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."m_obat" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- Indices
CREATE UNIQUE INDEX m_obat_nama_obat_unique ON public.m_obat USING btree (nama_obat);
ALTER TABLE "public"."m_satuan_obat" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."m_satuan_obat" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."order_details" ADD FOREIGN KEY ("order_id") REFERENCES "public"."trn_order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."order_details" ADD FOREIGN KEY ("obat_id") REFERENCES "public"."m_obat"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- Indices
CREATE INDEX sessions_user_id_index ON public.sessions USING btree (user_id);
CREATE INDEX sessions_last_activity_index ON public.sessions USING btree (last_activity);
ALTER TABLE "public"."trn_order" ADD FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."trn_order" ADD FOREIGN KEY ("unit_layanan_id") REFERENCES "public"."m_unit_layanan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."trn_order" ADD FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."trn_order" ADD FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."users" ADD FOREIGN KEY ("unit_layanan_id") REFERENCES "public"."m_unit_layanan"("id") ON DELETE CASCADE ON UPDATE CASCADE;


-- Indices
CREATE UNIQUE INDEX users_email_unique ON public.users USING btree (email);
