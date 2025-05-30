PGDMP                      }         	   puskesmas    17.4    17.4 p    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16613 	   puskesmas    DATABASE     o   CREATE DATABASE puskesmas WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en-US';
    DROP DATABASE puskesmas;
                     postgres    false                        3079    16838    system_stats 	   EXTENSION     @   CREATE EXTENSION IF NOT EXISTS system_stats WITH SCHEMA public;
    DROP EXTENSION system_stats;
                        false            �           0    0    EXTENSION system_stats    COMMENT     V   COMMENT ON EXTENSION system_stats IS 'EnterpriseDB system statistics for PostgreSQL';
                             false    2            �            1259    16614    cache    TABLE     �   CREATE TABLE public.cache (
    key character varying(255) NOT NULL,
    value text NOT NULL,
    expiration integer NOT NULL
);
    DROP TABLE public.cache;
       public         heap r       postgres    false            �            1259    16621    cache_locks    TABLE     �   CREATE TABLE public.cache_locks (
    key character varying(255) NOT NULL,
    owner character varying(255) NOT NULL,
    expiration integer NOT NULL
);
    DROP TABLE public.cache_locks;
       public         heap r       postgres    false            �            1259    16628    failed_jobs_id_seq    SEQUENCE     {   CREATE SEQUENCE public.failed_jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.failed_jobs_id_seq;
       public               postgres    false            �            1259    16629    failed_jobs    TABLE     ]  CREATE TABLE public.failed_jobs (
    id bigint DEFAULT nextval('public.failed_jobs_id_seq'::regclass) NOT NULL,
    uuid character varying(255) NOT NULL,
    connection text NOT NULL,
    queue text NOT NULL,
    payload text NOT NULL,
    exception text NOT NULL,
    failed_at timestamp(0) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
    DROP TABLE public.failed_jobs;
       public         heap r       postgres    false    220            �            1259    16638    histori_stok_obat_id_seq    SEQUENCE     �   CREATE SEQUENCE public.histori_stok_obat_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.histori_stok_obat_id_seq;
       public               postgres    false            �            1259    16639    histori_stok_obat    TABLE     �  CREATE TABLE public.histori_stok_obat (
    id bigint DEFAULT nextval('public.histori_stok_obat_id_seq'::regclass) NOT NULL,
    obat_id bigint NOT NULL,
    order_id bigint NOT NULL,
    tanggal_masuk date NOT NULL,
    tanggal_keluar date NOT NULL,
    jumlah_awal integer DEFAULT 0 NOT NULL,
    jumlah_baru integer DEFAULT 0 NOT NULL,
    jumlah_akhir integer DEFAULT 0 NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
 %   DROP TABLE public.histori_stok_obat;
       public         heap r       postgres    false    222            �            1259    16648    job_batches    TABLE     d  CREATE TABLE public.job_batches (
    id character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    total_jobs integer NOT NULL,
    pending_jobs integer NOT NULL,
    failed_jobs integer NOT NULL,
    failed_job_ids text NOT NULL,
    options text,
    cancelled_at integer,
    created_at integer NOT NULL,
    finished_at integer
);
    DROP TABLE public.job_batches;
       public         heap r       postgres    false            �            1259    16655    jobs_id_seq    SEQUENCE     t   CREATE SEQUENCE public.jobs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.jobs_id_seq;
       public               postgres    false            �            1259    16656    jobs    TABLE     (  CREATE TABLE public.jobs (
    id bigint DEFAULT nextval('public.jobs_id_seq'::regclass) NOT NULL,
    queue character varying(255) NOT NULL,
    payload text NOT NULL,
    attempts smallint NOT NULL,
    reserved_at integer,
    available_at integer NOT NULL,
    created_at integer NOT NULL
);
    DROP TABLE public.jobs;
       public         heap r       postgres    false    225            �            1259    16664    m_gudang_id_seq    SEQUENCE     x   CREATE SEQUENCE public.m_gudang_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.m_gudang_id_seq;
       public               postgres    false            �            1259    16665    m_gudang    TABLE     �  CREATE TABLE public.m_gudang (
    id bigint DEFAULT nextval('public.m_gudang_id_seq'::regclass) NOT NULL,
    kode_gudang character(100) NOT NULL,
    nama_gudang character varying(255) NOT NULL,
    lokasi character varying(255),
    keterangan character varying(255),
    created_by bigint NOT NULL,
    updated_by bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.m_gudang;
       public         heap r       postgres    false    227            �           0    0    COLUMN m_gudang.created_by    COMMENT     H   COMMENT ON COLUMN public.m_gudang.created_by IS 'relasi ke table useR';
          public               postgres    false    228            �           0    0    COLUMN m_gudang.updated_by    COMMENT     H   COMMENT ON COLUMN public.m_gudang.updated_by IS 'relasi ke table user';
          public               postgres    false    228            �            1259    16673    m_obat_id_seq    SEQUENCE     v   CREATE SEQUENCE public.m_obat_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.m_obat_id_seq;
       public               postgres    false            �            1259    16674    m_obat    TABLE     <  CREATE TABLE public.m_obat (
    id bigint DEFAULT nextval('public.m_obat_id_seq'::regclass) NOT NULL,
    nama_obat character(100) NOT NULL,
    satuan_id bigint NOT NULL,
    gudang_id bigint NOT NULL,
    stok integer DEFAULT 0 NOT NULL,
    jenis_obat smallint DEFAULT '1'::smallint NOT NULL,
    tanggal_kadaluarsa date,
    bpom character(255),
    gambar_obat character varying(255),
    keterangan text,
    created_by bigint NOT NULL,
    updated_by bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.m_obat;
       public         heap r       postgres    false    229            �           0    0    COLUMN m_obat.satuan_id    COMMENT     N   COMMENT ON COLUMN public.m_obat.satuan_id IS 'relasi ke table m_satuan_obat';
          public               postgres    false    230            �           0    0    COLUMN m_obat.gudang_id    COMMENT     P   COMMENT ON COLUMN public.m_obat.gudang_id IS 'relasi ke table m_kategori_obat';
          public               postgres    false    230            �           0    0    COLUMN m_obat.jenis_obat    COMMENT     V   COMMENT ON COLUMN public.m_obat.jenis_obat IS '0 = tidak ada, 1 = injeksi, 2 = oral';
          public               postgres    false    230            �           0    0    COLUMN m_obat.created_by    COMMENT     F   COMMENT ON COLUMN public.m_obat.created_by IS 'relasi ke table useR';
          public               postgres    false    230            �           0    0    COLUMN m_obat.updated_by    COMMENT     F   COMMENT ON COLUMN public.m_obat.updated_by IS 'relasi ke table user';
          public               postgres    false    230            �            1259    16684    m_satuan_obat_id_seq    SEQUENCE     }   CREATE SEQUENCE public.m_satuan_obat_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.m_satuan_obat_id_seq;
       public               postgres    false            �            1259    16685    m_satuan_obat    TABLE     m  CREATE TABLE public.m_satuan_obat (
    id bigint DEFAULT nextval('public.m_satuan_obat_id_seq'::regclass) NOT NULL,
    nama_satuan character varying(255) NOT NULL,
    keterangan character varying(255),
    created_by bigint NOT NULL,
    updated_by bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
 !   DROP TABLE public.m_satuan_obat;
       public         heap r       postgres    false    231            �           0    0    COLUMN m_satuan_obat.created_by    COMMENT     M   COMMENT ON COLUMN public.m_satuan_obat.created_by IS 'relasi ke table user';
          public               postgres    false    232            �           0    0    COLUMN m_satuan_obat.updated_by    COMMENT     M   COMMENT ON COLUMN public.m_satuan_obat.updated_by IS 'relasi ke table user';
          public               postgres    false    232            �            1259    16693    m_unit_layanan_id_seq    SEQUENCE     ~   CREATE SEQUENCE public.m_unit_layanan_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.m_unit_layanan_id_seq;
       public               postgres    false            �            1259    16694    m_unit_layanan    TABLE     9  CREATE TABLE public.m_unit_layanan (
    id bigint DEFAULT nextval('public.m_unit_layanan_id_seq'::regclass) NOT NULL,
    unit_layanan character varying(255) NOT NULL,
    keterangan character varying(255) NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
 "   DROP TABLE public.m_unit_layanan;
       public         heap r       postgres    false    233            �            1259    16702    migrations_id_seq    SEQUENCE     z   CREATE SEQUENCE public.migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.migrations_id_seq;
       public               postgres    false            �            1259    16703 
   migrations    TABLE     �   CREATE TABLE public.migrations (
    id integer DEFAULT nextval('public.migrations_id_seq'::regclass) NOT NULL,
    migration character varying(255) NOT NULL,
    batch integer NOT NULL
);
    DROP TABLE public.migrations;
       public         heap r       postgres    false    235            �            1259    16709    order_details    TABLE     �   CREATE TABLE public.order_details (
    order_id bigint NOT NULL,
    obat_id bigint NOT NULL,
    jumlah_obat integer NOT NULL
);
 !   DROP TABLE public.order_details;
       public         heap r       postgres    false            �            1259    16714    password_reset_tokens    TABLE     �   CREATE TABLE public.password_reset_tokens (
    email character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    created_at timestamp(0) without time zone
);
 )   DROP TABLE public.password_reset_tokens;
       public         heap r       postgres    false            �            1259    16721    sessions    TABLE     �   CREATE TABLE public.sessions (
    id character varying(255) NOT NULL,
    user_id bigint,
    ip_address character varying(45),
    user_agent text,
    payload text NOT NULL,
    last_activity integer NOT NULL
);
    DROP TABLE public.sessions;
       public         heap r       postgres    false            �            1259    16728    trn_order_id_seq    SEQUENCE     y   CREATE SEQUENCE public.trn_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.trn_order_id_seq;
       public               postgres    false            �            1259    16729 	   trn_order    TABLE     �  CREATE TABLE public.trn_order (
    id bigint DEFAULT nextval('public.trn_order_id_seq'::regclass) NOT NULL,
    unit_layanan_id bigint NOT NULL,
    user_id bigint NOT NULL,
    tgl_order date,
    status smallint DEFAULT '0'::smallint NOT NULL,
    jam_order time(0) without time zone,
    created_by bigint NOT NULL,
    updated_by bigint NOT NULL,
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.trn_order;
       public         heap r       postgres    false    240            �           0    0    COLUMN trn_order.status    COMMENT     S   COMMENT ON COLUMN public.trn_order.status IS '0=Menunggu, 1=Di Proses, 2=Selesai';
          public               postgres    false    241            �           0    0    COLUMN trn_order.created_by    COMMENT     I   COMMENT ON COLUMN public.trn_order.created_by IS 'relasi ke table useR';
          public               postgres    false    241            �           0    0    COLUMN trn_order.updated_by    COMMENT     I   COMMENT ON COLUMN public.trn_order.updated_by IS 'relasi ke table user';
          public               postgres    false    241            �            1259    16736    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false            �            1259    16737    users    TABLE       CREATE TABLE public.users (
    id bigint DEFAULT nextval('public.users_id_seq'::regclass) NOT NULL,
    name character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    unit_layanan_id bigint NOT NULL,
    foto character varying(255),
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);
    DROP TABLE public.users;
       public         heap r       postgres    false    242            �           0    0    COLUMN users.name    COMMENT     A   COMMENT ON COLUMN public.users.name IS 'menyimpan nama lengkap';
          public               postgres    false    243            �           0    0    COLUMN users.unit_layanan_id    COMMENT     �   COMMENT ON COLUMN public.users.unit_layanan_id IS 'relasi ke table unit layanan (UGD, rawat inap, persalinan, gigi dan mulut)';
          public               postgres    false    243            �          0    16614    cache 
   TABLE DATA           7   COPY public.cache (key, value, expiration) FROM stdin;
    public               postgres    false    218   3�       �          0    16621    cache_locks 
   TABLE DATA           =   COPY public.cache_locks (key, owner, expiration) FROM stdin;
    public               postgres    false    219   P�       �          0    16629    failed_jobs 
   TABLE DATA           a   COPY public.failed_jobs (id, uuid, connection, queue, payload, exception, failed_at) FROM stdin;
    public               postgres    false    221   m�       �          0    16639    histori_stok_obat 
   TABLE DATA           �   COPY public.histori_stok_obat (id, obat_id, order_id, tanggal_masuk, tanggal_keluar, jumlah_awal, jumlah_baru, jumlah_akhir, created_at, updated_at) FROM stdin;
    public               postgres    false    223   ��       �          0    16648    job_batches 
   TABLE DATA           �   COPY public.job_batches (id, name, total_jobs, pending_jobs, failed_jobs, failed_job_ids, options, cancelled_at, created_at, finished_at) FROM stdin;
    public               postgres    false    224   ��       �          0    16656    jobs 
   TABLE DATA           c   COPY public.jobs (id, queue, payload, attempts, reserved_at, available_at, created_at) FROM stdin;
    public               postgres    false    226   ď       �          0    16665    m_gudang 
   TABLE DATA           �   COPY public.m_gudang (id, kode_gudang, nama_gudang, lokasi, keterangan, created_by, updated_by, created_at, updated_at) FROM stdin;
    public               postgres    false    228   �       �          0    16674    m_obat 
   TABLE DATA           �   COPY public.m_obat (id, nama_obat, satuan_id, gudang_id, stok, jenis_obat, tanggal_kadaluarsa, bpom, gambar_obat, keterangan, created_by, updated_by, created_at, updated_at) FROM stdin;
    public               postgres    false    230   ��       �          0    16685    m_satuan_obat 
   TABLE DATA           t   COPY public.m_satuan_obat (id, nama_satuan, keterangan, created_by, updated_by, created_at, updated_at) FROM stdin;
    public               postgres    false    232   �       �          0    16694    m_unit_layanan 
   TABLE DATA           ^   COPY public.m_unit_layanan (id, unit_layanan, keterangan, created_at, updated_at) FROM stdin;
    public               postgres    false    234   8�       �          0    16703 
   migrations 
   TABLE DATA           :   COPY public.migrations (id, migration, batch) FROM stdin;
    public               postgres    false    236   ��       �          0    16709    order_details 
   TABLE DATA           G   COPY public.order_details (order_id, obat_id, jumlah_obat) FROM stdin;
    public               postgres    false    237   O�       �          0    16714    password_reset_tokens 
   TABLE DATA           I   COPY public.password_reset_tokens (email, token, created_at) FROM stdin;
    public               postgres    false    238   l�       �          0    16721    sessions 
   TABLE DATA           _   COPY public.sessions (id, user_id, ip_address, user_agent, payload, last_activity) FROM stdin;
    public               postgres    false    239   ��       �          0    16729 	   trn_order 
   TABLE DATA           �   COPY public.trn_order (id, unit_layanan_id, user_id, tgl_order, status, jam_order, created_by, updated_by, created_at, updated_at) FROM stdin;
    public               postgres    false    241   ��       �          0    16737    users 
   TABLE DATA           �   COPY public.users (id, name, username, email, email_verified_at, password, unit_layanan_id, foto, remember_token, created_at, updated_at) FROM stdin;
    public               postgres    false    243   Ñ       �           0    0    failed_jobs_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);
          public               postgres    false    220            �           0    0    histori_stok_obat_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.histori_stok_obat_id_seq', 1, false);
          public               postgres    false    222            �           0    0    jobs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.jobs_id_seq', 1, false);
          public               postgres    false    225            �           0    0    m_gudang_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.m_gudang_id_seq', 1, false);
          public               postgres    false    227            �           0    0    m_obat_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.m_obat_id_seq', 1, false);
          public               postgres    false    229            �           0    0    m_satuan_obat_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.m_satuan_obat_id_seq', 1, false);
          public               postgres    false    231            �           0    0    m_unit_layanan_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.m_unit_layanan_id_seq', 1, false);
          public               postgres    false    233            �           0    0    migrations_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.migrations_id_seq', 1, false);
          public               postgres    false    235            �           0    0    trn_order_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.trn_order_id_seq', 1, false);
          public               postgres    false    240            �           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public               postgres    false    242            �           2606    16627    cache_locks cache_locks_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.cache_locks
    ADD CONSTRAINT cache_locks_pkey PRIMARY KEY (key);
 F   ALTER TABLE ONLY public.cache_locks DROP CONSTRAINT cache_locks_pkey;
       public                 postgres    false    219            �           2606    16620    cache cache_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY public.cache
    ADD CONSTRAINT cache_pkey PRIMARY KEY (key);
 :   ALTER TABLE ONLY public.cache DROP CONSTRAINT cache_pkey;
       public                 postgres    false    218            �           2606    16637    failed_jobs failed_jobs_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.failed_jobs
    ADD CONSTRAINT failed_jobs_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.failed_jobs DROP CONSTRAINT failed_jobs_pkey;
       public                 postgres    false    221            �           2606    16647 (   histori_stok_obat histori_stok_obat_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.histori_stok_obat
    ADD CONSTRAINT histori_stok_obat_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.histori_stok_obat DROP CONSTRAINT histori_stok_obat_pkey;
       public                 postgres    false    223            �           2606    16654    job_batches job_batches_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.job_batches
    ADD CONSTRAINT job_batches_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.job_batches DROP CONSTRAINT job_batches_pkey;
       public                 postgres    false    224            �           2606    16663    jobs jobs_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.jobs DROP CONSTRAINT jobs_pkey;
       public                 postgres    false    226            �           2606    16672    m_gudang m_gudang_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.m_gudang
    ADD CONSTRAINT m_gudang_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.m_gudang DROP CONSTRAINT m_gudang_pkey;
       public                 postgres    false    228            �           2606    16683    m_obat m_obat_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.m_obat
    ADD CONSTRAINT m_obat_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.m_obat DROP CONSTRAINT m_obat_pkey;
       public                 postgres    false    230            �           2606    16692     m_satuan_obat m_satuan_obat_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.m_satuan_obat
    ADD CONSTRAINT m_satuan_obat_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.m_satuan_obat DROP CONSTRAINT m_satuan_obat_pkey;
       public                 postgres    false    232            �           2606    16701 "   m_unit_layanan m_unit_layanan_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.m_unit_layanan
    ADD CONSTRAINT m_unit_layanan_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.m_unit_layanan DROP CONSTRAINT m_unit_layanan_pkey;
       public                 postgres    false    234            �           2606    16708    migrations migrations_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.migrations DROP CONSTRAINT migrations_pkey;
       public                 postgres    false    236            �           2606    16713     order_details order_details_pkey 
   CONSTRAINT     m   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_pkey PRIMARY KEY (order_id, obat_id);
 J   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_details_pkey;
       public                 postgres    false    237    237            �           2606    16720 0   password_reset_tokens password_reset_tokens_pkey 
   CONSTRAINT     q   ALTER TABLE ONLY public.password_reset_tokens
    ADD CONSTRAINT password_reset_tokens_pkey PRIMARY KEY (email);
 Z   ALTER TABLE ONLY public.password_reset_tokens DROP CONSTRAINT password_reset_tokens_pkey;
       public                 postgres    false    238            �           2606    16727    sessions sessions_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sessions DROP CONSTRAINT sessions_pkey;
       public                 postgres    false    239            �           2606    16735    trn_order trn_order_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.trn_order
    ADD CONSTRAINT trn_order_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.trn_order DROP CONSTRAINT trn_order_pkey;
       public                 postgres    false    241            �           2606    16744    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    243            �           1259    16745    failed_jobs_uuid_unique    INDEX     V   CREATE UNIQUE INDEX failed_jobs_uuid_unique ON public.failed_jobs USING btree (uuid);
 +   DROP INDEX public.failed_jobs_uuid_unique;
       public                 postgres    false    221            �           1259    16756    jobs_queue_index    INDEX     B   CREATE INDEX jobs_queue_index ON public.jobs USING btree (queue);
 $   DROP INDEX public.jobs_queue_index;
       public                 postgres    false    226            �           1259    16767    m_gudang_kode_gudang_unique    INDEX     ^   CREATE UNIQUE INDEX m_gudang_kode_gudang_unique ON public.m_gudang USING btree (kode_gudang);
 /   DROP INDEX public.m_gudang_kode_gudang_unique;
       public                 postgres    false    228            �           1259    16788    m_obat_nama_obat_unique    INDEX     V   CREATE UNIQUE INDEX m_obat_nama_obat_unique ON public.m_obat USING btree (nama_obat);
 +   DROP INDEX public.m_obat_nama_obat_unique;
       public                 postgres    false    230            �           1259    16810    sessions_last_activity_index    INDEX     Z   CREATE INDEX sessions_last_activity_index ON public.sessions USING btree (last_activity);
 0   DROP INDEX public.sessions_last_activity_index;
       public                 postgres    false    239            �           1259    16809    sessions_user_id_index    INDEX     N   CREATE INDEX sessions_user_id_index ON public.sessions USING btree (user_id);
 *   DROP INDEX public.sessions_user_id_index;
       public                 postgres    false    239            �           1259    16836    users_email_unique    INDEX     L   CREATE UNIQUE INDEX users_email_unique ON public.users USING btree (email);
 &   DROP INDEX public.users_email_unique;
       public                 postgres    false    243            �           2606    16746 0   histori_stok_obat histori_stok_obat_obat_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.histori_stok_obat
    ADD CONSTRAINT histori_stok_obat_obat_id_fkey FOREIGN KEY (obat_id) REFERENCES public.m_obat(id) ON UPDATE CASCADE ON DELETE CASCADE;
 Z   ALTER TABLE ONLY public.histori_stok_obat DROP CONSTRAINT histori_stok_obat_obat_id_fkey;
       public               postgres    false    230    4811    223            �           2606    16751 1   histori_stok_obat histori_stok_obat_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.histori_stok_obat
    ADD CONSTRAINT histori_stok_obat_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.trn_order(id) ON UPDATE CASCADE ON DELETE CASCADE;
 [   ALTER TABLE ONLY public.histori_stok_obat DROP CONSTRAINT histori_stok_obat_order_id_fkey;
       public               postgres    false    223    4827    241            �           2606    16757 !   m_gudang m_gudang_created_by_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.m_gudang
    ADD CONSTRAINT m_gudang_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.m_gudang DROP CONSTRAINT m_gudang_created_by_fkey;
       public               postgres    false    4830    243    228            �           2606    16762 !   m_gudang m_gudang_updated_by_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.m_gudang
    ADD CONSTRAINT m_gudang_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.m_gudang DROP CONSTRAINT m_gudang_updated_by_fkey;
       public               postgres    false    4830    243    228            �           2606    16768    m_obat m_obat_created_by_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.m_obat
    ADD CONSTRAINT m_obat_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.m_obat DROP CONSTRAINT m_obat_created_by_fkey;
       public               postgres    false    230    4830    243            �           2606    16773    m_obat m_obat_gudang_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.m_obat
    ADD CONSTRAINT m_obat_gudang_id_fkey FOREIGN KEY (gudang_id) REFERENCES public.m_gudang(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.m_obat DROP CONSTRAINT m_obat_gudang_id_fkey;
       public               postgres    false    230    4808    228            �           2606    16778    m_obat m_obat_satuan_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.m_obat
    ADD CONSTRAINT m_obat_satuan_id_fkey FOREIGN KEY (satuan_id) REFERENCES public.m_satuan_obat(id) ON UPDATE CASCADE ON DELETE CASCADE;
 F   ALTER TABLE ONLY public.m_obat DROP CONSTRAINT m_obat_satuan_id_fkey;
       public               postgres    false    232    4813    230            �           2606    16783    m_obat m_obat_updated_by_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.m_obat
    ADD CONSTRAINT m_obat_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.m_obat DROP CONSTRAINT m_obat_updated_by_fkey;
       public               postgres    false    4830    230    243            �           2606    16789 +   m_satuan_obat m_satuan_obat_created_by_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.m_satuan_obat
    ADD CONSTRAINT m_satuan_obat_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 U   ALTER TABLE ONLY public.m_satuan_obat DROP CONSTRAINT m_satuan_obat_created_by_fkey;
       public               postgres    false    243    232    4830            �           2606    16794 +   m_satuan_obat m_satuan_obat_updated_by_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.m_satuan_obat
    ADD CONSTRAINT m_satuan_obat_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 U   ALTER TABLE ONLY public.m_satuan_obat DROP CONSTRAINT m_satuan_obat_updated_by_fkey;
       public               postgres    false    243    4830    232            �           2606    16804 (   order_details order_details_obat_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_obat_id_fkey FOREIGN KEY (obat_id) REFERENCES public.m_obat(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_details_obat_id_fkey;
       public               postgres    false    4811    230    237            �           2606    16799 )   order_details order_details_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_details
    ADD CONSTRAINT order_details_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.trn_order(id) ON UPDATE CASCADE ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.order_details DROP CONSTRAINT order_details_order_id_fkey;
       public               postgres    false    241    237    4827            �           2606    16811 #   trn_order trn_order_created_by_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trn_order
    ADD CONSTRAINT trn_order_created_by_fkey FOREIGN KEY (created_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.trn_order DROP CONSTRAINT trn_order_created_by_fkey;
       public               postgres    false    4830    243    241            �           2606    16826 (   trn_order trn_order_unit_layanan_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trn_order
    ADD CONSTRAINT trn_order_unit_layanan_id_fkey FOREIGN KEY (unit_layanan_id) REFERENCES public.m_unit_layanan(id) ON UPDATE CASCADE ON DELETE CASCADE;
 R   ALTER TABLE ONLY public.trn_order DROP CONSTRAINT trn_order_unit_layanan_id_fkey;
       public               postgres    false    234    4815    241            �           2606    16821 #   trn_order trn_order_updated_by_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trn_order
    ADD CONSTRAINT trn_order_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.trn_order DROP CONSTRAINT trn_order_updated_by_fkey;
       public               postgres    false    243    4830    241            �           2606    16816     trn_order trn_order_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.trn_order
    ADD CONSTRAINT trn_order_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.trn_order DROP CONSTRAINT trn_order_user_id_fkey;
       public               postgres    false    4830    241    243            �           2606    16831     users users_unit_layanan_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_unit_layanan_id_fkey FOREIGN KEY (unit_layanan_id) REFERENCES public.m_unit_layanan(id) ON UPDATE CASCADE ON DELETE CASCADE;
 J   ALTER TABLE ONLY public.users DROP CONSTRAINT users_unit_layanan_id_fkey;
       public               postgres    false    243    234    4815            �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   ?   x�3�uw��I�L�K�S�N-N�H,�JsKs9��LuLt��M�LL���q��qqq �V�      �   �   x�e�A� е�i�.M&���� ,z����DBX�?��� @��~N����`����lْ�~ѕ��)!���ì��;|���\sr���i���$HEА���*w�؇�r�٧�� (́)�l�do�mPl1�=J�B��]l�F��J,v;��Q{6K^R@�@��m������Yv�_�� ���.      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   D   x�3�LL���C&�s3s���s9c�8��ML9999��LuLt��M�LL�-��q��qqq �W     