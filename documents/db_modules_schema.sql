create database db_modules;

-- drop database db_modules;

use db_modules;

create table tb_module_pages (
	module_page_id int not null auto_increment,
    module_page_code varchar(500) not null unique,
    module_page_slug varchar(1000),
	created_at datetime,
    updated_at datetime,
    deleted_at datetime,
    is_active bool,
    is_deleted bool,
    primary key (module_page_id)
);

insert into tb_module_pages (module_page_code, module_page_slug, is_active) values ("home", "/", true);
insert into tb_module_pages (module_page_code, module_page_slug, is_active) values ("collections", "/collections", true);

create table tb_module_nodes (
	module_node_id int not null auto_increment,
    module_node_code varchar(500) not null unique,
    module_node_name varchar(1000) not null,
    created_at datetime,
    updated_at datetime,
    deleted_at datetime,
    is_deleted bool,
    primary key (module_node_id)
);

insert into tb_module_nodes (module_node_code, module_node_name) values ("carousel", "Carousel");
insert into tb_module_nodes (module_node_code, module_node_name) values ("categories", "Categories");
insert into tb_module_nodes (module_node_code, module_node_name) values ("section_1", "Section 1");
insert into tb_module_nodes (module_node_code, module_node_name) values ("section_2", "Section 2");

create table tb_page_node_connectors (
	page_node_connector_id int not null auto_increment,
    module_page_id int not null,
	module_node_id int not null,
    created_at datetime,
    updated_at datetime,
    deleted_at datetime,
    is_active bool,
    is_deleted bool,
    primary key (page_node_connector_id),
    foreign key (module_page_id) references tb_module_pages(module_page_id),
    foreign key (module_node_id) references tb_module_nodes(module_node_id)
);

insert into tb_page_node_connectors (module_page_id, module_node_id, is_active) values (1, 1, true);
insert into tb_page_node_connectors (module_page_id, module_node_id, is_active) values (1, 2, true);
insert into tb_page_node_connectors (module_page_id, module_node_id, is_active) values (1, 3, false);
insert into tb_page_node_connectors (module_page_id, module_node_id, is_active) values (1, 4, true);
