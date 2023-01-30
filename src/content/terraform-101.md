---
title: "Terraform 101"
description: "some stuff I learnt about terraform"
created_at: 2023-01-30
updated_at: 2023-01-30
author: "Charlotte Fereday @charlottebrf"
---

### How can I think about Terraform?
Terraform is [declarative not imperative](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2d). It describes an end state. It does not instruct how something should be run.

### How does Terraform 'read' the code?
Terraform does not read from 'top to bottom', rather Terraform has a birds eye view: it reads the entire file, looks at all the interdependencies.

### How does terraform 'know' there are changes?
Terraform will check three things:
1. Files (e.g. has main.tf) changed?
2. State file (managed by Terraform )
3. Does it match up with reality? i.e. do I actually have the resources stated in the file?

### Data sources
Think of a [data source](https://codeburst.io/declarative-vs-imperative-programming-a8a7c93d9ad2) as 'read only'. This is a read only source of data.

### Resource blocks
These are created and managed. Think of [resource blocks](https://developer.hashicorp.com/terraform/language/resources/syntax) as being similar to 'CRUD' operations. Unlike a data source a resource block can update and delete things. You can't have the same resource described more than once.

### Locals
Internal state not visible to the outside. Scoped to the module. 

### Module 
A folder containing a bunch of terraform files. You can create an instance of the module.

### Outputs 
Go from inside of the module to the outside.  

### Vars
Can be access from outside of the module into the module.

### Inputs
Are like arguments.