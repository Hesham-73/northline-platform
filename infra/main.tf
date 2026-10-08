resource "aws_vpc" "main" {
  cidr_block = "10.40.0.0/16"
}

resource "aws_subnet" "app" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.40.1.0/24"
}

resource "aws_subnet" "data" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.40.2.0/24"
}

resource "aws_db_subnet_group" "postgres" {
  name       = "northline-postgres"
  subnet_ids = [aws_subnet.data.id]
}

resource "aws_security_group" "postgres" {
  name   = "northline-postgres"
  vpc_id = aws_vpc.main.id
}

resource "aws_db_instance" "postgres" {
  identifier             = "northline-postgres"
  engine                 = "postgres"
  engine_version         = "16.4"
  instance_class         = "db.t4g.micro"
  db_subnet_group_name   = aws_db_subnet_group.postgres.name
  vpc_security_group_ids = [aws_security_group.postgres.id]
  allocated_storage      = 20
  skip_final_snapshot    = true
}

resource "aws_s3_bucket" "archive" {
  bucket = "northline-archive-example"
}
