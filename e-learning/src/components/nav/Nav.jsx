import React from "react";

const Nav = () => {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center">
          <BookIcon className="size-6" />
          <span className="sr-only">Acme Education</span>
        </a>
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                className="rounded-full sm:hidden"
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="sm:hidden">
              <nav className="grid gap-6 text-lg font-medium">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="link"
                      className="flex items-center justify-between"
                    >
                      Classes
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem>
                      <a href="#" className="flex items-center justify-between">
                        Class 1
                        <ChevronRightIcon className="h-4 w-4" />
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="link"
                      className="flex items-center justify-between"
                    >
                      Subjects
                      <ChevronDownIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    <DropdownMenuItem>
                      <a href="#" className="flex items-center justify-between">
                        Mathematics
                        <ChevronRightIcon className="h-4 w-4" />
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <a
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Contact
                </a>
              </nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden sm:flex gap-4 sm:gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link">
                  Classes <ChevronDownIcon className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <a href="#" className="flex items-center justify-between">
                    Class 1
                    <ChevronRightIcon className="h-4 w-4" />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link">
                  Subjects <ChevronDownIcon className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <a href="#" className="flex items-center justify-between">
                    Mathematics
                    <ChevronRightIcon className="h-4 w-4" />
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Nav;
