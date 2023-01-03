create database db_modules;

-- drop database db_modules;

use db_modules;

create table tb_module_pages (
	moldule_page_id int,
    module_page_code varchar(500) not null,
    module_page_slug varchar(1000),
    isActive bool,
    isDeleted bool,
    primary key (moldule_page_id)
);

