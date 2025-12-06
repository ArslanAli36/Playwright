--
-- PostgreSQL database dump
--

\restrict rsYVPeOKHoK2tNsmCdseltAQIzYJe384asW7yD3aiQ3MCZq2FmldnpCylO4xzBZ

-- Dumped from database version 18.1
-- Dumped by pg_dump version 18.1

-- Started on 2025-12-06 21:05:49

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16386)
-- Name: cd; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA cd;


ALTER SCHEMA cd OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 220 (class 1259 OID 16387)
-- Name: bookings; Type: TABLE; Schema: cd; Owner: postgres
--

CREATE TABLE cd.bookings (
    bookid integer NOT NULL,
    facid integer NOT NULL,
    memid integer NOT NULL,
    starttime timestamp without time zone NOT NULL,
    slots integer NOT NULL
);


ALTER TABLE cd.bookings OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16395)
-- Name: facilities; Type: TABLE; Schema: cd; Owner: postgres
--

CREATE TABLE cd.facilities (
    facid integer NOT NULL,
    name character varying(100) NOT NULL,
    membercost numeric NOT NULL,
    guestcost numeric NOT NULL,
    initialoutlay numeric NOT NULL,
    monthlymaintenance numeric NOT NULL
);


ALTER TABLE cd.facilities OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16406)
-- Name: members; Type: TABLE; Schema: cd; Owner: postgres
--

CREATE TABLE cd.members (
    memid integer NOT NULL,
    surname character varying(200) NOT NULL,
    firstname character varying(200) NOT NULL,
    address character varying(300) NOT NULL,
    zipcode integer NOT NULL,
    telephone character varying(20) NOT NULL,
    recommendedby integer,
    joindate timestamp without time zone NOT NULL
);


ALTER TABLE cd.members OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16418)
-- Name: bookings; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.bookings (
    bookid integer NOT NULL,
    facid integer NOT NULL,
    memid integer NOT NULL,
    starttime timestamp without time zone NOT NULL,
    slots integer NOT NULL
);


ALTER TABLE public.bookings OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16426)
-- Name: facilities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.facilities (
    facid integer NOT NULL,
    name character varying(100) NOT NULL,
    membercost numeric NOT NULL,
    guestcost numeric NOT NULL,
    initialoutlay numeric NOT NULL,
    monthlymaintenance numeric NOT NULL
);


ALTER TABLE public.facilities OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16437)
-- Name: members; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.members (
    memid integer NOT NULL,
    surname character varying(200) NOT NULL,
    firstname character varying(200) NOT NULL,
    address character varying(300) NOT NULL,
    zipcode integer NOT NULL,
    telephone character varying(20) NOT NULL,
    recommendedby integer,
    joindate timestamp without time zone NOT NULL
);


ALTER TABLE public.members OWNER TO postgres;

--
-- TOC entry 5031 (class 0 OID 16387)
-- Dependencies: 220
-- Data for Name: bookings; Type: TABLE DATA; Schema: cd; Owner: postgres
--

COPY cd.bookings (bookid, facid, memid, starttime, slots) FROM stdin;
\.


--
-- TOC entry 5032 (class 0 OID 16395)
-- Dependencies: 221
-- Data for Name: facilities; Type: TABLE DATA; Schema: cd; Owner: postgres
--

COPY cd.facilities (facid, name, membercost, guestcost, initialoutlay, monthlymaintenance) FROM stdin;
\.


--
-- TOC entry 5033 (class 0 OID 16406)
-- Dependencies: 222
-- Data for Name: members; Type: TABLE DATA; Schema: cd; Owner: postgres
--

COPY cd.members (memid, surname, firstname, address, zipcode, telephone, recommendedby, joindate) FROM stdin;
\.


--
-- TOC entry 5034 (class 0 OID 16418)
-- Dependencies: 223
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.bookings (bookid, facid, memid, starttime, slots) FROM stdin;
0	3	1	2012-07-03 11:00:00	2
1	4	1	2012-07-03 08:00:00	2
\.


--
-- TOC entry 5035 (class 0 OID 16426)
-- Dependencies: 224
-- Data for Name: facilities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.facilities (facid, name, membercost, guestcost, initialoutlay, monthlymaintenance) FROM stdin;
0	Tennis Court 1	5	25	10000	200
1	Tennis Court 2	5	25	8000	200
2	Badminton Court	0	15.5	4000	50
3	Table Tennis	0	5	320	10
4	Massage Room 1	35	80	4000	3000
5	Massage Room 2	35	80	4000	3000
6	Squash Court	3.5	17.5	5000	80
7	Snooker Table	0	5	450	15
8	Pool Table	0	5	400	15
\.


--
-- TOC entry 5036 (class 0 OID 16437)
-- Dependencies: 225
-- Data for Name: members; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.members (memid, surname, firstname, address, zipcode, telephone, recommendedby, joindate) FROM stdin;
0	GUEST	GUEST	GUEST	0	(000) 000-0000	\N	2012-07-01 00:00:00
1	Smith	Darren	8 Bloomsbury Close, Boston	4321	555-555-5555	\N	2012-07-02 12:02:05
2	Smith	Tracy	8 Bloomsbury Close, New York	4321	555-555-5555	\N	2012-07-02 12:08:23
3	Rownam	Tim	23 Highway Way, Boston	23423	(844) 693-0723	\N	2012-07-03 09:32:15
4	Joplette	Janice	20 Crossing Road, New York	234	(833) 942-4710	1	2012-07-03 10:25:05
5	Butters	Gerald	1065 Huntingdon Avenue, Boston	56754	(844) 078-4130	1	2012-07-09 10:44:09
6	Tracy	Burton	3 Tunisia Drive, Boston	45678	(822) 354-9973	\N	2012-07-15 08:52:55
7	Dare	Nancy	6 Hunting Lodge Way, Boston	10383	(833) 776-4001	4	2012-07-25 08:59:12
8	Boothe	Tim	3 Bloomsbury Close, Reading, 00234	234	(811) 433-2547	3	2012-07-25 16:02:35
9	Stibbons	Ponder	5 Dragons Way, Winchester	87630	(833) 160-3900	6	2012-07-25 17:09:05
\.


--
-- TOC entry 4877 (class 2606 OID 16450)
-- Name: bookings bookings_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pk PRIMARY KEY (bookid);


--
-- TOC entry 4879 (class 2606 OID 16452)
-- Name: facilities facilities_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.facilities
    ADD CONSTRAINT facilities_pk PRIMARY KEY (facid);


--
-- TOC entry 4881 (class 2606 OID 16454)
-- Name: members members_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.members
    ADD CONSTRAINT members_pk PRIMARY KEY (memid);


--
-- TOC entry 4882 (class 2606 OID 16455)
-- Name: bookings fk_bookings_facid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT fk_bookings_facid FOREIGN KEY (facid) REFERENCES public.facilities(facid);


--
-- TOC entry 4883 (class 2606 OID 16460)
-- Name: bookings fk_bookings_memid; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT fk_bookings_memid FOREIGN KEY (memid) REFERENCES public.members(memid);


-- Completed on 2025-12-06 21:05:49

--
-- PostgreSQL database dump complete
--

\unrestrict rsYVPeOKHoK2tNsmCdseltAQIzYJe384asW7yD3aiQ3MCZq2FmldnpCylO4xzBZ

