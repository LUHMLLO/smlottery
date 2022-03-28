export interface sidebar_role {
  icon?: string;
  name: string;
  sections: role_section[];
}

export interface role_section {
  icon?: string;
  name: string;
  routes: section_route[];
}

export interface section_route {
  icon?: string;
  name: string;
  path: string;
}
