import companies from './companies'

const repositories = {
  companies: companies,
}

export const Factory = {
  get: (name) => repositories[name]
}